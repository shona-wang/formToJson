import Vue from 'vue';
import category from '../packages/category';
import radio from '../packages/radio';
import checkbox from '../packages/checkbox';
import title from '../packages/title';
import text from '../packages/text';
import textarea from '../packages/textarea';
import image from '../packages/image';
import date from '../packages/date';
import address from '../packages/address';
import tree from '../packages/tree';
import number from '../packages/number';
const version = '1.0.0';
const install = function(Vue, config = {}) {
  if (install.installed) return;

    if (toString.call(category) == "[object Object]") {
        for (let i in category) {
            Vue.component(category[i].name, category[i]);
        }
    }else{
        Vue.component(category.name, category);
    }


    if (toString.call(radio) == "[object Object]") {
        for (let i in radio) {
            Vue.component(radio[i].name, radio[i]);
        }
    }else{
        Vue.component(radio.name, radio);
    }


    if (toString.call(checkbox) == "[object Object]") {
        for (let i in checkbox) {
            Vue.component(checkbox[i].name, checkbox[i]);
        }
    }else{
        Vue.component(checkbox.name, checkbox);
    }


    if (toString.call(title) == "[object Object]") {
        for (let i in title) {
            Vue.component(title[i].name, title[i]);
        }
    }else{
        Vue.component(title.name, title);
    }


    if (toString.call(text) == "[object Object]") {
        for (let i in text) {
            Vue.component(text[i].name, text[i]);
        }
    }else{
        Vue.component(text.name, text);
    }


    if (toString.call(textarea) == "[object Object]") {
        for (let i in textarea) {
            Vue.component(textarea[i].name, textarea[i]);
        }
    }else{
        Vue.component(textarea.name, textarea);
    }


    if (toString.call(image) == "[object Object]") {
        for (let i in image) {
            Vue.component(image[i].name, image[i]);
        }
    }else{
        Vue.component(image.name, image);
    }


    if (toString.call(date) == "[object Object]") {
        for (let i in date) {
            Vue.component(date[i].name, date[i]);
        }
    }else{
        Vue.component(date.name, date);
    }


    if (toString.call(address) == "[object Object]") {
        for (let i in address) {
            Vue.component(address[i].name, address[i]);
        }
    }else{
        Vue.component(address.name, address);
    }


    if (toString.call(tree) == "[object Object]") {
        for (let i in tree) {
            Vue.component(tree[i].name, tree[i]);
        }
    }else{
        Vue.component(tree.name, tree);
    }


    if (toString.call(number) == "[object Object]") {
        for (let i in number) {
            Vue.component(number[i].name, number[i]);
        }
    }else{
        Vue.component(number.name, number);
    }

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version,
  category,
  radio,
  checkbox,
  title,
  text,
  textarea,
  image,
  date,
  address,
  tree,
  number
};
