// console.log("Hello world!");
// const a:number = 10;
// const b:number = 5;
// const tinhtong = (a:number,b:number)=>{
//     return a+b;
// }
// console.log(tinhtong(a,b));
const chuvi = (dai:number,rong:number):number=>{
    return (dai+rong)*2;
}
const dientich = (dai:number,rong:number):any=>{
    return 'Dien tich la: '+dai*rong;
}
const dai:number= 10;
const rong:number= 20;
console.log(`Chu vi là ${chuvi(dai,rong)}`);
console.log(`Diện tích là ${dientich(dai,rong)}`);