import axios from 'axios'
import {Button, CircularProgress, Image} from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NavBar from '../../components/nav'
import MyModal from '../../components/modal'

var getProductDetail = (pid, updateDetail)=>{
    axios.get('http://localhost:8000/product',{
        params:{
            id: pid
        }
    })
    .then((res)=>{
        updateDetail(res.data)
    })
    .catch((e)=>{
        console.log(e)
    })
}


const Post = () => {

  
  const [detail, setDetail] = useState({status:'waiting'})
  var updateDetail = (obj)=>{
    setDetail(obj)
  }
  console.log('bleah')
  const router = useRouter()
  const { pid } = router.query

  const [addSuccess, setAddSuccess] = useState(false)

  var addCart = ()=>{
    var user_id = localStorage.getItem('user_id')
    doAddCart(user_id, pid, 1)
  }

  var doAddCart = (user_id,product_id,count)=>{
    axios.get('http://127.0.0.1:8000/cart/add',{
      params:{
        user_id:user_id,
        product_id:product_id,
        count:count
      }
    }).then((resp)=>{
      if(resp.data.status=='Ok'){
        setAddSuccess(true)
      }
    })
  }
  if(detail.status=='waiting')
    getProductDetail(parseInt(pid), updateDetail)

    const [visited,setVisited] = useState(false)

    if(!visited && typeof window !== 'undefined'){
        var user_id = localStorage.getItem('user_id')
        setVisited(true)
        if(user_id)
          axios.get('http://localhost:8000/visit/add',{
              params:{
                  user_id:user_id,
                  product_id:pid
              }
          })
    }

  return <>
  <NavBar></NavBar>
  {/* <p>Product: {JSON.stringify(detail)}</p> */}
  {detail.status=='Ok'?<>
  <h1>{detail.detail.name}</h1>
  <img src={detail.detail.imgurl}></img>
  
  <h2>{`\$${detail.detail.price}`}</h2>
  <p>Category: {detail.detail.category}</p>
  <p>Stock : {detail.detail.stock}</p>
  <p>Description : {detail.detail.description}</p>
  <Button variant='contained' onClick={addCart}>加购物车</Button>
  <MyModal open={addSuccess}>
    加购成功!
    <Button variant='contained' onClick={()=>{setAddSuccess(false)}}>好</Button>
  </MyModal>
  </>:<>
  <CircularProgress/>
  </>}
  </>
}

export default Post