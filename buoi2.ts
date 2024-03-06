// Khai báo biến kiểu string.
// let yourname:string;
// yourname = "sdfasfsa";
// Kiểu string
const yourname:string = "dsdfsd";
//Kiểu number
let yourage:number;
// Kiểu boolean;
let istatus:boolean = false;
// Array
// cách 1
const manga:any[] = [];
// cách 2
const mangb:Array<string> = [];
// manga.push('String1');
manga.push(1);
manga.push("sdfsdfdsf");
manga.push(3);
console.log(manga);
// Kiểu any
let params:any;
params = [5,4,2];
console.log(params);

// type productType = {
//     "name":string;
//     "price":number;
//     "image":string;
// }
interface ProductType {
    "name":string;
    "price":number;
    "image":string;
}
const ProductA:ProductType = {
    "name":"Sản phẩm A",
    "price":1000,
    "image":"Link ảnh"
}
// console.log(ProductA.name,ProductA.price,ProductA.image);
// type storeType = {
//     "name":string;
//     "products":ProductType[];
//     "address":string;
// }
type storeType = {
    "name":string;
    "products":ProductType[];
    "address"?:string;
}
let store:storeType;
let store2:storeType;
store = {
    name:"TH TrueMilk",
    products:[{
        "name":"Sản phẩm A",
        "price":1000,
        "image":"Link ảnh"
    },
    {
        "name":"Sản phẩm B",
        "price":2000,
        "image":"Link ảnh B"
    }],
    address:"Hà Nội"
}
store2 = {
    name:"TH TrueMilk 2",
    products:[{
        "name":"Sản phẩm A",
        "price":1000,
        "image":"Link ảnh"
    },
    {
        "name":"Sản phẩm B",
        "price":2000,
        "image":"Link ảnh B"
    }]
}
console.log(store2.name);
console.log(store2.products);
