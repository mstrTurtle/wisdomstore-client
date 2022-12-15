import styles from './cartitem.module.css';
import Link from 'next/link';
import Layout from './layout';
import { IconButton, Stack } from '@mui/material';
import { Clear, Delete } from '@mui/icons-material';

var item = { id: 1, name: 'Code Complete', cost: 3.5, count: 2 }
export default function CartItem({ children , item, onRemoveItem}) {
    return (
        <Stack direction={'row'} key={item} >
            <Link className={styles.cartitem} href="/">{item.name}</Link>
            <p>{`${item.id} ${item.count}`}</p>
            <IconButton onClick={() => onRemoveItem(item.id)}><Delete /></IconButton>
        </Stack>
    );
}

