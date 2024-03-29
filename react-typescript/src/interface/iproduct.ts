// export type Iproduct =     {
//     "id": number,
//     "title": string,
//     "description": string,
//     "price": number,
//     "discountPercentage": number,
//     "rating": number,
//     "stock": number,
//     "brand": string,
//     "category": string,
//     "thumbnail": string,
//     "images":string[]
//   }
export type Iproduct = {
  id:string,
  name:string,
  image:string,
  price:number
}
export type IproductLite = Pick<Iproduct,'name'|'image'|'price'>