import styles from '../category.module.css';
import Link from 'next/link';
import Layout from '../layout';

var order = {
    timecreated: "2012-04-23T18:25:43.511Z",
    state: 'pending',
    items:[
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 },
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 },
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 }
    ]
};

var calcSum = ()=>{
    var sum = 0
    order.items.forEach(({cost,count})=>{sum+=cost*count})
    return sum
}

export default function OrderPending({ children }) {

    return <div className={styles.category}>
        <h1>{'订单等待确认(即等待你打钱)'}</h1>
        <p>订单的状态是: {order.state}</p>
        <h2>清单:</h2>
        {order.items.map(({id,name,cost,count})=><div>
            <p>
                {`${id} - ${name} -> ${cost} * ${count} = ${cost*count}`}</p>
            </div>)}
        <h2>总金额</h2>
        <p>{calcSum()}</p>
        <button>打钱</button>
    </div>;
}