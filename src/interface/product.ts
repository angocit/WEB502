export interface IProduct {
  id:string|number,
  name:string,
  price:number,
  image:string
}
export type IProductForm = Omit<IProduct,"id">