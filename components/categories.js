import styles from './category.module.css';
import Link from 'next/link';
import Layout from './layout';
import { Grid } from '@mui/material';
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
           <Grid item  key={product} xs={4} ><Link className={styles.category} href={"/category/"+product}>{product}</Link></Grid>
          );
        });

        return (
           <Grid container>
            {rows}
            </Grid>
          );
        }

  return <div className={styles.category}>
    <h2  >按分类浏览</h2>
    <ProductTable className={styles.category} products={cats}/>
 
  </div>;
}