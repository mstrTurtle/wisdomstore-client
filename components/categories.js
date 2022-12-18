import styles from './category.module.css';
import Link from 'next/link';
import Layout from './layout';
var cats = [
"药水",
"商务管理",
"化学",
"计算机科学",
"地球科学",
"环境学",
"教育学",
"工程"
];

export default function Category({ children }) {
    function ProductTable({ products}) {
        const rows = [];
        let lastCategory = null;
      
        products.forEach((product) => {
          rows.push(
           <li key={product} ><Link className={styles.category} href={"/category/"+product}>{product}</Link></li>
          );
        });

        return (
           <ul className={styles.category}>
            {rows}
            </ul>
          );
        }

  return <div className={styles.category}>
    <h1  >按分类浏览</h1>
    <ProductTable className={styles.category} products={cats}/>
    <ul className={styles.category}>
            </ul>
  </div>;
}