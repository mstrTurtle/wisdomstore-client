import styles from './cartitem.module.css';
import Link from 'next/link';
import Layout from './layout';
import { IconButton, Stack , Grid} from '@mui/material';
import { Clear, Delete } from '@mui/icons-material';

var item = { id: 1, name: 'Code Complete', cost: 3.5, count: 2 }
export default function CartItem({ children , item, onRemoveItem}) {
    if(typeof window !== 'undefined'){
        var user_id = localStorage.getItem('user_id')
    }
    return (
        <Grid container spacing={2}>
        <Grid item xs={4}  >
            <Link className={styles.cartitem} href="/">{item.name}</Link>
            </Grid>
            <Grid item xs={4}  >
            {item.price}元
                </Grid>
                <Grid item xs={2}>
                x{item.count}
                </Grid>
                <Grid item xs={2}  >
                <IconButton onClick={() => onRemoveItem(user_id, item.id)}><Delete /></IconButton>
                </Grid>
            
        </Grid>
    );
}

