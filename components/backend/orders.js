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
import { Delete, Done, Edit, Restore } from '@mui/icons-material';
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


export default function OrderTable() {
    const [products,setProducts] = React.useState(null)
    const [addOpen,setAddOpen] = React.useState(false)
    const [editOpen,setEditOpen] = React.useState(false)
    const [productId,setProductId] = React.useState(null)

    if(products==null){
        axios.get('api/order/all')
        .then((resp)=>{
            setProducts(resp.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }


  return (
    (products==null)?<CircularProgress/>:<>
    <h1>订单管理</h1>
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
            <StyledTableCell>用户id</StyledTableCell>
            <StyledTableCell align="right">收货人</StyledTableCell>
            <StyledTableCell align="right">收货电话</StyledTableCell>
            <StyledTableCell align="right">创建时间</StyledTableCell>
            <StyledTableCell align="right">详情</StyledTableCell>
            <StyledTableCell align="right">完成/撤销完成</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.user_id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.createTime}</StyledTableCell>
              <StyledTableCell align="right">{JSON.stringify(row.items)}</StyledTableCell>
              <StyledTableCell align="right">
                {row.finishTime==null?
                <IconButton onClick={()=>{
                    axios.get('api/order/finish',{
                        params:{
                            order_id: row.id
                        }
                    })
                    .then(resp=>{
                        setProducts(null)
                    })
                }}>
                    <Done/>
                </IconButton>
                :<IconButton onClick={()=>{
                    axios.get('api/order/unfinish',{
                        params:{
                            order_id: row.id
                        }
                    })
                    .then(resp=>{
                        setProducts(null)
                    })
                }}>
                    <Restore/>
                </IconButton>
                }
                
              </StyledTableCell>
              

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}