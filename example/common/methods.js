// 对象的深拷贝
export let deepCopy = (o, c) => {
    var c = c || {};
    for (let i in o) {
        if (toString.call(o[i]) === '[object Object]') {
            c[i] = {};
            deepCopy(o[i], c[i])
        } else if (toString.call(o[i]) === '[object Array]') {
            c[i] = [];
            deepCopy(o[i], c[i])
        } else {
            c[i] = o[i];
        }
    }
    return c;
}