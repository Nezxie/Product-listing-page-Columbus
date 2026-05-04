'use client'
import {useContext, createContext, useState} from 'react'

type CartContentType = {
    cartCounter:number,
    addToCart:()=>void
}

const CartContext = createContext<CartContentType | null>(null);

//context provider
export function CartWrapper({children}:Readonly<{children:React.ReactNode}>){
    const [cartCounter, setCartCounter] = useState(0);
    const addToCart = ()=>{
        setCartCounter(prev=>prev+1)
    }
    const contextVar = {cartCounter,addToCart}
    return(
        <CartContext value={contextVar}>
            {children}
        </CartContext>
    )
}

//hook to get context in children
export function useCartState(){
    return useContext(CartContext);
}