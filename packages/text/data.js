let text = {
    random: "", // 唯一标识，随机数
    require: false, // 是否必填
    label: "文本字段", // 字段名字
    isViewActive: false, // view区是否处于选中状态
    isViewShow: true, // 是否展示View区
    isSetActive: false, // set区是否选中
    isSetShow: false, // 是否显示set区
    isDelete: true, // 是否可以删除
    hasError: false, // 是否是错误状态 用于表单检验
    value: '', // 字段的值
    placeholder: '提示信息', // 字段的提示信息
    requireText: { // 是否必填字段的显示字体
        'active': '必填',
        'inactive': '选填'
    }
};
export default text;