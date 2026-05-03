interface ProductImage {
    url:string,
    altText:string,
}
interface Promotion {
    name:string
    percentage:number
}
export interface Product {
    articleNumber:string,
    ean:string,
	link:string,
	image:ProductImage,
	title:string,
	description:string,
	brandName:string,
	brandLogo:string,
	price:number,
    promotion:Promotion|null
}