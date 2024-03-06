// const a:number = 5;
// const b:number = 10;
// const tinhtong = (a:number,b:number):number=>{
//     return a+b;
// }
// console.log(tinhtong(a,b));

// Tính chu vi và diện tích hình tròn
const chuvi=(r:number):any=>{
    const pi:number = 3.14;
    console.log(`Chu vi là: ${2*r*pi}`)
}
chuvi(5);
const dientich = (r:number):number=>{
    const pi:number = 3.14;
    return r*r*pi;
}
console.log(`Diện tích hình chữ nhật là: ${dientich(10)}`);