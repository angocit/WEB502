export interface IProduct {
  id: number | string;
  name: string;
  image: string;
  price: number;
}
export type IProductFormm = Omit<IProduct,"id">