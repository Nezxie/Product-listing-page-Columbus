import CartIcon from "@/components/CartIcon/CartIcon"
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({}){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.brand}>
                <h1><Link href="/">Northbound</Link></h1>
            </div>
            <CartIcon/>
        </header>
    )
}