import styles from '../category.module.css';
import Link from 'next/link';
import Layout from '../layout';

var order = {
    timecreated: "2012-04-23T18:25:43.511Z",
    state: 'delivering',
    items:[
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 },
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 },
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 }
    ]
};

export default function OrderDelivering({ children }) {

    return <div className={styles.category}>
        <h1>正在派送</h1>
        <p>订单的状态是: {order.state}</p>
    </div>;
}