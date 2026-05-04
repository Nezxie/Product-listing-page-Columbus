import Image from "next/image";
import styles from "./BrandBadge.module.css"

export default function BrandBadge({name,logo}:{name:string,logo:string}){
    return(
        <div className={styles.badgeContainer}>
            <p>{name}</p>
            <Image
                className={styles.image}
                height={60}
                width={160}
                src={logo}
                alt={`Logo for brand ${name}`}
            />
        </div>
    )
}