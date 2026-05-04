import {Product} from '@/types/product'
import styles from './ProductCard.module.css'
import Image from "next/image";
import BrandBadge from '@/components/BrandBadge/BrandBadge'
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton'
import {formatCurrency, getDiscountedPrice} from '@/lib/price'

export default function ProductCard({data}:{data:Product}){
    return(
        <article className={styles.card}>
          <div className={styles.productImageContainer}>
          {data.promotion?<span className={styles.promotionLabel}>{`${data.promotion.name}: -${data.promotion.percentage}%`}</span>:""}
             <Image
                      src={data.image.url}
                      alt={data.image.altText}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
          </div>
            <h2 className={styles.productTitle}>{data.title}</h2>
            <BrandBadge name={data.brandName} logo={data.brandLogo}/>
            <p className={styles.productDescription}>{data.description}</p>
            <div className={styles.priceContainer}>
              <div>
                <p className={data.promotion?styles.crossedOutPrice:styles.price}>{formatCurrency(data.price)}</p>
                {data.promotion?
                <p className={styles.price}>{formatCurrency(getDiscountedPrice(data.price,data.promotion.percentage))}</p>
                  :""}
              </div>
              <AddToCartButton/>
            </div>
        </article>
     )
}