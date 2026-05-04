import Image from "next/image";
import CartIcon from "@/components/CartIcon/CartIcon"
import styles from './Header.module.css'

export default function Header({}){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.brand}>
                <h1>Northbound</h1>
            </div>
            <CartIcon/>
        </header>
    )
}