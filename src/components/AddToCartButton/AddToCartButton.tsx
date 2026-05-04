'use client'
import styles from './AddToCartButton.module.css'
import {useCartState} from '@/lib/CartStateWrapper'

export default function AddToCartButton(){
    const onAddToCart = useCartState()?.addToCart //what happens if it's null do i need a guard here?
    return <button className={styles.addToCartButton} onClick={onAddToCart}>Add to cart</button>
}