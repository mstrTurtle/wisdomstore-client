import styles from './cart.module.css';
import Link from 'next/link';
import Layout from './layout';
import CartItem from './cartitem';

var items = [
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 },
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 },
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 }
];

export default function Cart({ children }) {

    function removeItem(itemId){
        var t = items.filter(({id})=>{return id==itemId;})
        var item = t[0]
        console.log(`${JSON.stringify(item)} removed`)
    }
    function CartList({ items}) {
        const rows = [];
        let lastCategory = null;
      
        items.forEach((item) => {
          rows.push(
              <li key={item} >
                  {/* <Link className={styles.cart} href="/">{item.name}</Link>
                  <button onClick={() => removeItem(item.id)}>delete</button> */}
                  <CartItem item={item} onRemoveItem={removeItem}></CartItem>
              </li>
          );
        });

        return (
           <ul className={styles.cart}>
            {rows}
            </ul>
          );
        }

    return <div className={styles.cart}>
        <h1>Cart</h1>
        <CartList className={styles.cart} items={items} />
        <button>Create Order</button>
    </div>;
}