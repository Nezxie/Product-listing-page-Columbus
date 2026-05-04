import {Product} from '@/types/product'
import {Image} from '@/types/image'

export interface APIResponse{
    title: string,
    logo:Image,
    products: Product[]
}
export interface Branding{
    logo:Image,
    title:string
}