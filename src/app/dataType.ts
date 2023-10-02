export interface AdminSignUp {
    name:string,
    password:string,
    email:string
}
export interface AdminLogin {
    email:string,
    password:string,
}

export interface book {
    name:string,
    price:string,
    category:string,
    author:string,
    description:string,
    image:string,
    id:any,
    quantity:undefined | number,
    productId:any | undefined
}

export interface cart{
    name:string,
    price:string,
    category:string,
    author:string,
    description:string,
    image:string,
    id:any | undefined,
    quantity:undefined | number,
    productId:any,
    userId:any,
}