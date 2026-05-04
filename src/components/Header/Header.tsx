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
            {branding.logo?.url?
                <Image
                className={styles.logomark}
                height={60}
                width={160}
                src={branding.logo.url}
                alt={branding.logo.altText}
                />
            :<div aria-hidden="true" className={styles.logoFallback}>C</div>
            }
            <h1>{branding.title ?? "Columbus Graduate Program Recruitment Task"}</h1>
            </Link>
            <CartIcon/>
        </header>
    )
}