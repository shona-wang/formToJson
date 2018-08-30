import widgetsData from '../../src/data';
import { deepCopy } from './methods';

let adaptData = (() => {
    let formData = [],
        containerFlag = 'category',
        _isContainer = (type) => {
            let flag;
            return flag = type == containerFlag ? true : false;
        },
        position = (random) => {
            let obj = {
                parentKey: '',
                childKey: 'null',
                data: {}
            };
            formData.forEach((val, index) => {
                if (val.value.random == random) {
                    obj.parentKey = index;
                    obj.data = val;
                    return false;
                } else {
                    val.value.children.forEach((child, i) => {
                        if (child.value.random == random) {
                            obj.childKey = i;
                            obj.parentKey = index;
                            obj.data = child;
                            return false;
                        }
                    })
                }
            })
            return obj;
        },
        _createContainer = () => {
            formData.push(_init(containerFlag));
        },
        _allHide = () => {
            formData.forEach((val, index) => {
                val.value.isViewActive = false;
                val.value.isSetShow = false;
                val.value.children.forEach((child) => {
                    child.value.isViewActive = false;
                    child.value.isSetShow = false;
                })
            })
        },
        _init = (widget) => {
            let propsData = {},
                random = Math.random(),
                newData = deepCopy(widgetsData[widget + 'Data']);
            newData.random = random;
            propsData.type = widget;
            // 有values值的时候，设置最小删除项
            if (newData.values && newData.values.length <= newData.minVal) {
                newData.values.forEach((val) => {
                    val.isDelete = false;
                });
            }
            propsData.value = newData;
            return propsData;
        };
    /**
     * add() 添加widget,适用于拖拽添加
     * type: widget的类型
     * key: 如果没拖在最后，key必传，为目标区的random
     * push 仅仅是拖拽到view区上，没有触焦到其他组件
     * sort 拖拽到view区后，并和已有的组件进行排序
     */
    let add = (type, key) => {
        let push = (type) => {
            let isFrist = !formData.length ? true : false,
                widgetData = _init(type);
            // 高亮
            _allHide();
            widgetData.value.isViewActive = true;
            widgetData.value.isSetShow = true;
            isFrist && _createContainer();
            formData[formData.length - 1].value.children.push(widgetData);
        };
        let sort = (type, key) => {
            let obj = position(key),
                widgetData = _init(type);
            // 高亮
            _allHide();
            widgetData.value.isViewActive = true;
            widgetData.value.isSetShow = true;
            // 目标元素为容器类型，向上一个数组push，否则像当前元素push
            if (obj.childKey == 'null') {
                formData[obj.parentKey - 1].value.children.push(widgetData);
            } else {
                formData[obj.parentKey].value.children.splice(obj.childKey+1, 0, widgetData);
            }
        };
        let isContainer = _isContainer(type);
        // 拖拽源为容器类型,直接插在最后
        if (isContainer) {
            _createContainer();
            // 高亮
            _allHide();
            formData[formData.length - 1].value.isViewActive = true;
            formData[formData.length - 1].value.isSetShow = true;
        } else {
            if (key) {
                sort(type, key)
            } else {
                push(type);
            }
        }
    };
    /**
     * 
     * @param {*源widget的类型} srcType 
     * @param {*源widget的random} srcKey 
     * @param {*目标widget的random} targetKey 
     */
    let sort = (srcType, srcKey, targetKey) => {
        let srcIsContainer = _isContainer(srcType),
            srcPos = position(srcKey),
            targetPos = position(targetKey);
        // 高亮
        _allHide();
        // 拖拽源为容器时，整个数组进行排序，否则widget之间排序
        if (srcIsContainer) {
            formData[srcPos.parentKey].value.isViewActive = true;
            formData[srcPos.parentKey].value.isSetShow = true;
            formData.splice(targetPos.parentKey+1, 0, srcPos.data);
            if (srcPos.parentKey > targetPos.parentKey) { // 向上移动
                formData.splice(Number(srcPos.parentKey + 1), 1);
            } else { // 向下移动
                formData.splice(srcPos.parentKey, 1);
            }
        } else {
            let children = formData[srcPos.parentKey].value.children,
                childrenVal = children[srcPos.childKey].value;
            childrenVal.isViewActive = true;
            childrenVal.isSetShow = true;
            // 目标为容器容器时，删除src容器中的src元素，想target的上一个容器中添加child
            if (targetPos.childKey == 'null') {
                formData[srcPos.parentKey].value.children.splice(srcPos.childKey, 1);
                formData[targetPos.parentKey - 1].value.children.push(srcPos.data);
            } else {
                formData[targetPos.parentKey].value.children.splice(targetPos.childKey+1, 0, srcPos.data);
                // 同级向上移动
                if (srcPos.parentKey == targetPos.parentKey && srcPos.childKey > targetPos.childKey) {
                    children.splice(Number(srcPos.childKey) + 1, 1);
                } else {
                    children.splice(srcPos.childKey, 1);
                }
            }
        }
    };
    /**
     * @param {*删除的widget的类型} type 
     * @param {*删除的widget的random} random 
     * delAll 删除这个组件本身
     */
    let delAll = (type, random) => {
        let pos = position(random);
        if (type == containerFlag) {
            if (formData[pos.parentKey].value.children.length > 0) {
                if (confirm('此类下面的字段都将删除，确定删除？')) {
                    formData.splice(pos.parentKey, 1);
                }
            } else {
                formData.splice(pos.parentKey, 1);
            }
        } else {
            formData[pos.parentKey].value.children.splice(pos.childKey, 1)
        }
    }
    /**
     * @param {*删除的widget的container} type 
     * @param {*删除的widget的random} random 
     * delContainer 删除整个组
     */
    let delContainer = (type, random) => {
        let pos = position(random);
        formData.splice(pos.parentKey, 1);
    }
    /**
     * @param {*删除的widget的random} random 
     * @param {*如果为删除widget中的值时，必传，为值的index} delIndex 
     * delAtom 删除组件下面的值，例如删除单选中的值
     */
    let delAtom = (random, delIndex) => {
        let pos = position(random);
        // choice类型的删除数据结构不同
        if (pos.data.type == 'choice') {
            let data = formData[pos.parentKey].value.children[pos.childKey].value.values,
                valIndex, minVal, valLength;
            data.forEach((val, index) => {
                if (val.type == pos.data.value.checked) {
                    valIndex = index;
                    minVal = val.minVal;
                    valLength = val.values.length;
                }
            });
            data[valIndex].values.splice(delIndex, 1);
            if (valLength - 1 == minVal) {
                data[valIndex].values.forEach((v) => {
                    v.isDelete = false;
                })
            }
        } else {
            let data = formData[pos.parentKey].value.children[pos.childKey].value,
                minVal = data.minVal,
                valLength = data.values.length;
            data.values.splice(delIndex, 1);
            // 不能小于最小值
            if (valLength - 1 == minVal) {
                data.values.forEach((val) => {
                    val.isDelete = false;
                })
            }
        }
    };
    let addAtom = (random, delIndex) => {
        let pos = position(random);
        if (pos.data.type == 'choice') {
            let data = formData[pos.parentKey].value.children[pos.childKey].value.values,
                valIndex;
            data.forEach((val, index) => {
                if (val.type == pos.data.value.checked) {
                    valIndex = index;
                }
            });
            let arr = data[valIndex].values,
                len = arr.length,
                obj = deepCopy(arr[len - 1]);
            arr.push(obj);
            if (arr.length > data[valIndex].minVal) {
                arr.forEach((v) => {
                    v.isDelete = true;
                })
            }
        } else {
            let data = formData[pos.parentKey].value.children[pos.childKey].value,
                obj;
            if (pos.data.type == 'file') {
                let defaultVal = pos.data.value.defaultVal;
                obj = defaultVal;
            } else {
                obj = deepCopy(data.values[data.values.length - 1]);
            }
            data.values.push(obj);
            if (data.values.length > data.minVal) {
                data.values.forEach((val) => {
                    val.isDelete = true;
                })
            }
        }

    };
    /**
     * 修改信息
     * key: 修改widget的random
     * obj: 要修改的对象
     */
    let set = (key, obj) => {
        let pos = position(key);
        if (pos.childKey == 'null') {
            Object.assign(formData[pos.parentKey].value, obj);
        } else {
            Object.assign(formData[pos.parentKey].value.children[pos.childKey].value, obj);
        }
    };
    /**
     * 
     * @param {*widget的random值} random 
     */
    let show = (random) => {
        let pos = position(random);
        _allHide();
        if (pos.childKey == 'null') {
            formData.forEach((val, index) => {
                val.value.isViewActive = val.value.random == random ? true : false;
                val.value.isSetShow = val.value.random == random ? true : false;
            });
        } else {
            let parent = formData[pos.parentKey].value;
            parent.children[pos.childKey].value.isViewActive = true;
            parent.children[pos.childKey].value.isSetShow = true;
        }
    };
    return {
        formData: formData,
        containerFlag: containerFlag,
        position: position,
        add: add,
        sort: sort,
        delContainer: delContainer,
        delAll: delAll,
        delAtom: delAtom,
        addAtom: addAtom,
        set: set,
        show: show
    };
})();

export default adaptData;