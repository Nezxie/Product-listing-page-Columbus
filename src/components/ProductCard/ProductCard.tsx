import Image from "next/image";
import {Product} from '@/types/product'
import styles from './ProductCard.module.css'
import BrandBadge from '@/components/BrandBadge/BrandBadge'

export default function ProductCard({data}:{data:Product}){
    return(
        <article className={styles.card}>
          <div className={styles.productImageContainer}>
             <Image
                      src={data.image.url}
                      alt={data.image.altText}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
          </div>
            <h2>{data.title}</h2>
            <BrandBadge name={data.brandName} logo={data.brandLogo}/>
            <p>{data.description}</p>
            <p>{data.price}</p>
              <button>Add to cart</button>
        </article>
     )
}