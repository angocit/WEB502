//  Generic Typescript
 export const ItemToArray =<T>(product:T):T[]=>{
    return [product,product]
  }
interface Iproduct{
  name:string,
  id:number
}
var a:Iproduct = {
  name:"ABC",
  id:1
}
interface ITodo{
  name:string,
  priority:string
}
var todo:ITodo = {
  name:"Đi học",
  priority:"Cao"
}
const result = ItemToArray<Iproduct>(a)
const rusulttodo = ItemToArray<ITodo>(todo)
const  resultNumber = ItemToArray<number>(6)
