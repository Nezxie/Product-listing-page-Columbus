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

    const addToCart = async ()=>{
        const cartUpdatedStatus = await new Promise(resolve => setTimeout(()=>{resolve(true)},500)); //fake request for cart update 
        if(cartUpdatedStatus){
            setCartCounter(prev=>prev+1)
        }
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
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCartState must be called inside a CartWrapper")
    }
    return context;
}