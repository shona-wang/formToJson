let radio = {
    random: "",
    label: "单选字段",
    values: [{
        label:'是',
        value: 1,
        isDelete: true,
    },
    {
        label: '否',
        value: 0,
        isDelete: true
    }],
    requireText:{
        'active': '必填',
        'inactive': '选填'
    },
    require: false,
    isDelete: true,
    checked: 1,
    minVal: 2,
    isSpecialField: 0,
    isViewActive: false,
    isViewShow: true,
    isSetActive: false,
    isSetShow: false
};
export default radio;