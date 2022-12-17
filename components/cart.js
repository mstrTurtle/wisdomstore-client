import styles from './cart.module.css';
import Link from 'next/link';
import Layout from './layout';
import CartItem from './cartitem';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import axios from 'axios';

var items = [
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 },
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 },
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 }
];

export default function Cart({ children }) {

    const [items, setItems] = useState(null)

    if(!items && typeof window !== 'undefined'){
        
        var user_id = localStorage.getItem('user_id')
        if(user_id){
            
        axios.get('http://127.0.0.1:8000/cart',{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{
            if(resp.data.status == 'Ok')
                setItems(resp.data.cartItems)
        })}
        
        
    }

    function removeItem(user_id, product_id){
        console.log(`removing: ${user_id} - ${product_id}`)
        axios.get('http://127.0.0.1:8000/cart/remove',{
            params:{
                user_id,
                product_id,
            }
        })
        setItems(null)
    }
    function CartList({ items}) {
        const rows = [];
        let lastCategory = null;
      
        items.forEach((item) => {
          rows.push(
                  <CartItem item={item} onRemoveItem={removeItem}></CartItem>
          );
        });

        return (
            <div className={styles.cart}>
            {rows}
            </div>
          );
        }

        if(typeof window !== 'undefined')
            var user_id = localStorage.getItem('user_id')

    return <div className={styles.cart}>
        <h1>Cart</h1>
        {items?<><CartList className={styles.cart} items={items} />
        <button>Create Order</button>
        </>:
        
        <>
        <CircularProgress/>
        </>}
        
    </div>;
}