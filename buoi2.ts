//kiểu number
// let a:number;
// a = -10;
// console.log(a);

// let a:string;
// a = 'Chuỗi';
//Boolean;
// let a:boolean =true;
// // a = 'sdfsfsd';
// // a =10;
// a = false;

// Array
// cách 1
// const a:string[] = [];
// a.push('a');
// a.push('b');
// a.push('c');
// a.push('d');
// a.push(1);
// const a:number[] = [];
// a.push(1);
// a.push(2);
// a.push(3);
// a.push(4);
// a.push(1);
// console.log(a);
// Cách 2
// const a:Array<string>=[];
// Object
// let a:{
//     "name":string,
//     "age":number
// };
// a = {
//     "name":"Ngoc Ngo",
//     "age": 20
// }
// console.log(a.name);

// type ProductType = {
//     "name":string;
//     "price":number;
//     "image":string;
// }
// type ProductType = {
//     "name":string;
//     "price":number;
//     "image":string;
// }
// interface ProductType{
//     "name":string;
//     "price":number;
//     "image":string;
// }
// type StoreType = {
//     "name":string;
//     "address":string;
//     "products":ProductType[]
// }
// let store: StoreType;
// store ={
//     "name":"WinMart",
//     "address": "Hà Nội",
//     "products": [
//         {"name":"Sản phẩm 1", "price":10000, "image":"Link ảnh 1"},
//         {"name":"Sản phẩm 2", "price":30000, "image":"Link ảnh 2"},
//         {"name":"Sản phẩm 3", "price":40000, "image":"Link ảnh 3"},
//         {"name":"Sản phẩm 4", "price":105000, "image":"Link ảnh 4"}
//     ]
// }
// console.log(store);

// let product1:ProductType;
// let product2:ProductType;
// product1={
//     "name":"Sản phẩm 1",
//     "price":10000,
//     "image":"Link ảnh 1"
// }
// product2={
//     "name":"Sản phẩm 1",
//     "price":10000
// }
// console.log(product1);
// console.log(product2);
interface IStudent {
  hoTen: string;
  diaChi: string;
  email: string;
  soDienThoai: string;
  tuoi: number;
}
interface IClass{
    "name":string;
    "major":string;
    "students":IStudent[];
}
const listClass:IClass[] = [{
    "name": "WD18329",
    "major": "IT",
    "students": [
        {
            hoTen: "Nguyễn Văn A",
            diaChi: "Số 10, Đường ABC, Quận XYZ, Thành phố HCM",
            email: "van.a@example.com",
            soDienThoai: "0123456789",
            tuoi: 20
        },
        {
            hoTen: "Trần Thị B",
            diaChi: "Số 20, Đường XYZ, Quận ABC, Thành phố Hà Nội",
            email: "thi.b@example.com",
            soDienThoai: "0987654321",
            tuoi: 22
        },
        {
            hoTen: "Lê Văn C",
            diaChi: "Số 30, Đường DEF, Quận UVW, Thành phố Đà Nẵng",
            email: "van.c@example.com",
            soDienThoai: "0365478912",
            tuoi: 21
        },
        {
            hoTen: "Phạm Thị D",
            diaChi: "Số 40, Đường GHI, Quận JKL, Thành phố Cần Thơ",
            email: "thi.d@example.com",
            soDienThoai: "0987123456",
            tuoi: 19
        },
        {
            hoTen: "Hoàng Văn E",
            diaChi: "Số 50, Đường KLM, Quận NOP, Thành phố Hải Phòng",
            email: "van.e@example.com",
            soDienThoai: "0912345678",
            tuoi: 23
        },
        {
            hoTen: "Nguyễn Thị F",
            diaChi: "Số 60, Đường MNO, Quận PQR, Thành phố Đồng Tháp",
            email: "thi.f@example.com",
            soDienThoai: "0987654321",
            tuoi: 24
        },
        {
            hoTen: "Trần Văn G",
            diaChi: "Số 70, Đường STU, Quận VWX, Thành phố An Giang",
            email: "van.g@example.com",
            soDienThoai: "0123456789",
            tuoi: 20
        },
        {
            hoTen: "Lê Thị H",
            diaChi: "Số 80, Đường YZA, Quận BCD, Thành phố Bạc Liêu",
            email: "thi.h@example.com",
            soDienThoai: "0365478912",
            tuoi: 21
        },
        {
            hoTen: "Phạm Văn I",
            diaChi: "Số 90, Đường EFG, Quận HIJ, Thành phố Kiên Giang",
            email: "van.i@example.com",
            soDienThoai: "0987123456",
            tuoi: 19
        },
        {
            hoTen: "Hoàng Thị K",
            diaChi: "Số 100, Đường LMN, Quận OPQ, Thành phố Long An",
            email: "thi.k@example.com",
            soDienThoai: "0912345678",
            tuoi: 23
        }
    ]
},
{
    "name": "WD18327",
    "major": "IT",
    "students": [
        {
            hoTen: "Trần Văn An",
            diaChi: "123 Đường ABC, Quận XYZ, Thành phố HCM",
            email: "tranvanan@example.com",
            soDienThoai: "0123456789",
            tuoi: 21
        },
        {
            hoTen: "Nguyễn Thị Bình",
            diaChi: "456 Đường DEF, Quận UVW, Thành phố Hà Nội",
            email: "nguyenthibinh@example.com",
            soDienThoai: "0987654321",
            tuoi: 20
        },
        {
            hoTen: "Lê Đình Cường",
            diaChi: "789 Đường GHI, Quận JKL, Thành phố Đà Nẵng",
            email: "ledinhcuong@example.com",
            soDienThoai: "0365478912",
            tuoi: 22
        },
        {
            hoTen: "Phạm Thị Dung",
            diaChi: "101 Đường MNO, Quận PQR, Thành phố Cần Thơ",
            email: "phamthidung@example.com",
            soDienThoai: "0987123456",
            tuoi: 19
        },
        {
            hoTen: "Hoàng Văn Eo",
            diaChi: "111 Đường STU, Quận VWX, Thành phố Hải Phòng",
            email: "hoangvaneo@example.com",
            soDienThoai: "0912345678",
            tuoi: 23
        },
        {
            hoTen: "Nguyễn Thị Phương",
            diaChi: "222 Đường YZA, Quận BCD, Thành phố Đồng Tháp",
            email: "nguyenthiphuong@example.com",
            soDienThoai: "0123456789",
            tuoi: 20
        },
        {
            hoTen: "Trần Văn Giang",
            diaChi: "333 Đường EFG, Quận HIJ, Thành phố An Giang",
            email: "tranvangiang@example.com",
            soDienThoai: "0365478912",
            tuoi: 21
        },
        {
            hoTen: "Lê Thị Hằng",
            diaChi: "444 Đường LMN, Quận OPQ, Thành phố Bạc Liêu",
            email: "lethihang@example.com",
            soDienThoai: "0987123456",
            tuoi: 19
        },
        {
            hoTen: "Phạm Văn Khôi",
            diaChi: "555 Đường STU, Quận VWX, Thành phố Cần Thơ",
            email: "phamvankhoi@example.com",
            soDienThoai: "0912345678",
            tuoi: 22
        },
        {
            hoTen: "Hoàng Thị Ngọc",
            diaChi: "666 Đường YZA, Quận BCD, Thành phố Hà Nội",
            email: "hoangthingoc@example.com",
            soDienThoai: "0123456789",
            tuoi: 24
        }
    ]
}]
console.log(listClass);