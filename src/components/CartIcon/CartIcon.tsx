'use client'
import { ShoppingCart } from 'lucide-react';
import styles from './CartIcon.module.css'
import {useCartState} from '@/lib/CartStateWrapper'

export default function CartIcon(){
    const counter = useCartState()?.cartCounter||0;
    return(
    <div className={styles.shoppingCartIcon}>
        <ShoppingCart />
        {counter>0?<span className={styles.counterBubble}>{counter}</span>:""}
    </div>
    )
}