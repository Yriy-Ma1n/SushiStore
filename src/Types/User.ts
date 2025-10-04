export interface User {
  user_id: string,
  name: string,
  email: string,
  img: string,
  productInCart: product[]
}

export interface product{
    id:string,
    name:string,
    price:number,
    img:string,
    description:string
}