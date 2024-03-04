// console.log("Hello world!");
// const a:number = 10;
// const b:number = 5;
// const tinhtong = (a:number,b:number)=>{
//     return a+b;
// }
// console.log(tinhtong(a,b));
var chuvi = function (dai, rong) {
    return (dai + rong) * 2;
};
var dientich = function (dai, rong) {
    return 'Dien tich la: ' + dai * rong;
};
var dai = 10;
var rong = 20;
console.log("Chu vi l\u00E0 ".concat(chuvi(dai, rong)));
console.log("Di\u1EC7n t\u00EDch l\u00E0 ".concat(dientich(dai, rong)));
