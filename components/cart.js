import styles from './cart.module.css';
import Link from 'next/link';
import Layout from './layout';
import CartItem from './cartitem';
import { useRef, useState } from 'react';
import { Button, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import MyModal from './modal';

var items = [
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 },
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 },
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 }
];

export default function Cart({ children }) {
    var name = useRef('')
    var addr = useRef('')
    var phone = useRef('')
    const [items, setItems] = useState(null)
    const [successOpen, setSuccessOpen] = useState(false)
    const [failOpen, setFailOpen] = useState(false)
    console.log(items)

    if(!items && typeof window !== 'undefined'){
        
        var user_id = localStorage.getItem('user_id')
        if(user_id){
            
        axios.get('/myapi/cart',{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{
            if(resp.data.status == 'Ok')
                setItems(resp.data.cartItems)
        })}
        
        
    }

    function createOrder(user_id,name,addr,phone){
        // 负责新建订单的函数
        // 向order/create进行请求. 参数有四个, 在axios.get传参过程中指定.
         axios.get('/myapi/order/create', {
            params:{
                user_id:user_id,
                name:name,
                addr:addr,
                phone:phone
            }
        }).then(resp=>{ // 如果请求成功, 异步地处理响应
            if (resp.data.status=='Ok') // 如果响应的json中, status为Ok
                setSuccessOpen(true) // 那么, 打开成功对话框
            else
                setFailOpen(true) // 否则, 打开失败对话框
        }).catch(e=>{ // 如果请求过程中, 内部或网络失败
            setFailOpen(true) // 也打开失败对话框
        })
    }

    function removeItem(user_id, product_id){
        // 移除购物车商品的函数
        console.log(`removing: ${user_id} - ${product_id}`)
        axios.get('/myapi/cart/remove',{
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
        {items // 如果购物车商品已经获得, 那么展示商品
        ?<>
        {items.length==0?<div>Empty Cart</div>:<><CartList className={styles.cart} items={items} />
        <div><TextField label="收货人姓名" inputRef={name}/></div>
        <div><TextField label="收货地址" inputRef={addr}/></div>
        <div><TextField label="收货电话" inputRef={phone}/></div>
        
            <Button variant='contained' onClick={()=>{
               createOrder(user_id,name.current.value, addr.current.value,phone.current.value) 
       
       }}>支付并创建订单</Button>


       
        <MyModal open={successOpen}>
            创建订单成功<br/>
            <Button variant='contained' onClick={()=>{setSuccessOpen(false);setItems(null);}}>好</Button>
       </MyModal>
       <MyModal open={failOpen}>
            创建订单失败<br/>
            <Button variant='contained' onClick={()=>setFailOpen(false)}>好</Button>
       </MyModal>
       </>}

        </>: // 否则, 展示环形旋转进度条
        
        <>
        <CircularProgress/>
        </>}
        
    </div>;
}