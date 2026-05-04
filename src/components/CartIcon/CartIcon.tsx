import { ShoppingBasket, ShoppingCart  } from 'lucide-react';
import styles from './CartIcon.module.css'

export default function CartIcon({}){
    return(
    <div className={styles.shoppingCartIcon}>
        <ShoppingCart  />
        <span className={styles.counterBubble}>1</span> {/*implement adding logic later later*/}
    </div>
    )
}