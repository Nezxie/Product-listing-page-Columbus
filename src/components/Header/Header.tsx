import Image from "next/image";
import CartIcon from "@/components/CartIcon/CartIcon"
import styles from './Header.module.css'
import Link from 'next/link'
import {getBranding} from '@/lib/api'

const branding = await getBranding();
export default async function Header(){
    return(
        <header className={styles.headerContainer}>
            <Link href="/" className={styles.brand}>
                <Image
                className={styles.logomark}
                height={60}
                width={160}
                src={branding.logo.url}
                alt={branding.logo.altText}
            />
                <h1>{branding.title}</h1>
            </Link>
            <CartIcon/>
        </header>
    )
}