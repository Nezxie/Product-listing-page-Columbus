import styles from "./page.module.css";
import {getProducts} from "@/lib/api"
import ProductCard from "@/components/ProductCard/ProductCard";

export default async function Home() {
  const productList = await getProducts();
  return (
    <main className={styles.main}>
      <section className={styles.productGrid}>
        {productList.length>0?productList.map((product)=>{
          return <ProductCard key={product.articleNumber} data={product}/>
        }):
        <p className={styles.empty}>No products to display</p>}
      </section>
    </main>
  );
}
