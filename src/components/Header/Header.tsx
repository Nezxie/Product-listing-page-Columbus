import Image from "next/image";
import CartIcon from "@/components/CartIcon/CartIcon"
import styles from './Header.module.css'

export default function Header({}){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.brand}>
                <Image
            className=""
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
            />
                <h1>Shop name</h1>
            </div>
            <CartIcon/>
        </header>
    )
}