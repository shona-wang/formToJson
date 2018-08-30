let title = {
    random: "", // 唯一标识
    label: "模板标题显示位置", // 字段名称
    require: false, //是否必填
    isDrag: true, // 是否可拖拽
    isDelete: true, // 是否可删除
    isViewActive: false, // view区是否被选中
    isViewShow: true, // 是否显示view区
    isSetActive: false, // set区是否被选中
    isSetShow: false, // 是否显示set区
    placeholder: '请输入标题', // 提示信息
    requireText: { // 必填选填字段
        'active': '必填',
        'inactive': '选填'
    }
};
export default title;