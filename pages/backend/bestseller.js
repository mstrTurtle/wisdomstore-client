import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { EmojiEvents, History, Home, Info, LineAxis, People, Receipt, Warehouse } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import GoodTable from '../../components/backend/good';
import AddProduct from '../../components/backend/addGood';
import Backend from '../../components/backend';
import SaleTable from '../../components/backend/bestseller';

export default function BestSeller(){
    return <Backend><SaleTable/></Backend>
}