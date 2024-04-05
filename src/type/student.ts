export interface IStudents{
    id:string;
    name:string;
    age:number;
    email:string;
    phone:string;
}
export type Istudentform = Pick<IStudents,'name'|'age'|'email'|'phone'>