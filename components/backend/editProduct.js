import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import MyModal from '../modal';
import axios from 'axios';
import UploadButton from '../uploadImageButton';
function getImgUrlFromUuidName(uuidName){
    return 'http://localhost:8000/pics/?fname=' + uuidName
}
export default function EditProduct({product_id, onSuccess, setClose}) {
  const [open, setOpen] = React.useState(false);
  const [fail,setFail] = React.useState(false);
  var name = React.useRef('')
  var price = React.useRef('')
  var category = React.useRef('')
  var stock = React.useRef('')
  var description = React.useRef('')
  const [detail, setDetail] = React.useState(null)
  const [imgUrl, setImgUrl] = React.useState('')

        
  var update = (product_id,name,price,category,stock,description,imgurl)=>{
        
        axios.get('http://localhost:8000/product/update',{
        params:{
            product_id:product_id,
            name:name,
            price:price,
            category:category,
            stock:stock,
            description:description,
            imgurl:imgurl
        }
        }).then((resp)=>{
            if(resp.data.status=='Ok'){
                console.log(resp.data.status)
                setOpen(true) ;
            }else{
                console.log(resp.data.status)
                setFail(true)
            }
        }).catch(function (error) {
            setFail(true)
            console.log(error);
        })
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <MyModal open={open}>
        <div>添加成功!</div>
        <Button variant="contained" onClick={() => { setOpen(false);onSuccess(); }}>好</Button>
      </MyModal>
      <MyModal open={fail}>
        <div>添加失败!</div>
        <Button variant="contained" onClick={() => { setFail(false) }}>好</Button>
      </MyModal>
      <div><TextField label="商品名称" inputRef={name}/></div>
      <div><TextField label="价格" inputRef={price}/></div>
      <div><TextField label="分类" inputRef={category}/></div>
      <div><TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="库存" inputRef={stock}/></div>
      <div><TextField label="描述" inputRef={description}/></div>
      <div><TextField label="ImgUrl" value={imgUrl} onChange={(e)=>{setImgUrl(e.target.value)}}/></div>
      <UploadButton handleDetail={(detail)=>{setDetail(detail);setImgUrl(getImgUrlFromUuidName(detail.uuidName))}}></UploadButton>
      <div>
      <Stack direction={'row'} spacing={2}>
        <Button variant='contained' onClick={() => {
                if(detail==null){
                    setFail(true)
                    return
                }
                update(
                    product_id,
                    name.current.value,
                    parseFloat(price.current.value),
                    category.current.value,
                    parseInt(stock.current.value),
                    description.current.value,
                    imgUrl
                    )}
            }>提交</Button>
        <Button variant='contained' onClick={() => {setClose()}}>取消</Button>
        </Stack>
      </div>

    </Box>
  );
}