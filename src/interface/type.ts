export interface IProduct {
    id:number|string,
    name:string,
    image:string,
    description:string,
    price:number
}
export type ProductForm = Omit<IProduct,"id">
export interface IUser {
    id:number|string,
    name:string,
    phone:string,
    email:string,
    password:string
}
export type UserRegister = Omit<IUser,"id">
export type UserLogin = Pick<IUser,"email"|"password">
