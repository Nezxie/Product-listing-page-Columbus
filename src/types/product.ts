import {Image} from '@/types/image'

interface Promotion {
    name:string
    percentage:number
}
export interface Product {
    articleNumber:string,
    ean:string,
	link:string,
	image:Image,
	title:string,
	description:string,
	brandName:string,
	brandLogo:string,
	price:number,
    promotion:Promotion|null
}