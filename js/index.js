"use strict";
const chuvi = (dai, rong) => {
    return (dai + rong) * 2;
};
const dientich = (dai, rong) => {
    return 'Dien tich hình chữ nhật la: ' + dai * rong;
};
const dai = 10;
const rong = 20;
console.log(`Chu vi là ${chuvi(dai, rong)}`);
console.log(`${dientich(dai, rong)}`);
