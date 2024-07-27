export interface IProduct {
    id:string|number;
    name: string;
    image:string;
    price:number;
    description:string;
    category:number;
}
export type ProductForm = Pick<IProduct,'name'|'price'|'description'|'image'|'category'>
export interface IUser{
    name:string;
    email:string;
    password:string;
    id?:string|number
}