let checkbox = {
    checked: ['复选框1'],
    label: "多选字段",
    values: [
        {
            label: '复选框1',
            value: '复选框1',
            isDelete: true
        },
        {
            label: '复选框2',
            value: '复选框2',
            isDelete: true
        },
        {
            label: '复选框3',
            value: '复选框3',
            isDelete: true
        },
        {
            label: '复选框4',
            value: '复选框4',
            isDelete: true
        }
    ],
    requireText: {
        'active': '必填',
        'inactive': '选填'
    },
    isDelete: true,
    isViewActive: false,
    isViewShow: true,
    isSetActive: false,
    isSetShow: false,
    minVal:2,
    require: false,
    isSpecialField: 0
};
export default checkbox;