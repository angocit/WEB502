export interface IProduct {
  id: number;
  name: string;
  image:string;
  price: number;
}
export type TProductForm = Omit<IProduct,'id'>