import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { CircularProgress,Button, IconButton } from '@mui/material';
import AddProduct from './addGood';
import MyModal from '../modal';
import { Delete, Edit } from '@mui/icons-material';
import EditProduct from './editProduct';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function SaleTable() {
    const [products,setProducts] = React.useState(null)
    const [addOpen,setAddOpen] = React.useState(false)
    const [editOpen,setEditOpen] = React.useState(false)
    const [productId,setProductId] = React.useState(null)

    if(products==null){
        axios.get('api/rank/all')
        .then((resp)=>{
            setProducts(resp.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }


  return (
    (products==null)?<CircularProgress/>:<>
    <h1>销售榜单</h1>
    <MyModal open={addOpen} >
        <AddProduct 
            onSuccess={()=>{
                    setProducts(null)
                    setAddOpen(false)
                }
            }
            setClose={()=>{setAddOpen(false)}}
            />
    </MyModal>
    <MyModal open={editOpen} >
        <EditProduct
            product_id={productId}
            onSuccess={()=>{
                    setProducts(null)
                    setEditOpen(false)
                }
            }
            setClose={()=>{setEditOpen(false)}}
            />
    </MyModal>
   
       
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>商品名</StyledTableCell>
            <StyledTableCell align="right">价格</StyledTableCell>
            <StyledTableCell align="right">分类</StyledTableCell>
            <StyledTableCell align="right">库存</StyledTableCell>
            <StyledTableCell align="right">描述</StyledTableCell>
            <StyledTableCell align="right">销量</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.stock}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.sale}</StyledTableCell>
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}