import styles from "./page.module.css";
import {getProducts} from "@/lib/api"
import {Product} from '@/types/product'
import ProductCard from "@/components/ProductCard/ProductCard";

export default async function Home() {
  const productList = await getProducts();
  return (
    <main>
      <section className={styles.productGrid}>
        {productList.map((product:Product)=>{
          return <ProductCard key={product.articleNumber} data={product}/>
        })}
      </section>

    </main>
  );
}
