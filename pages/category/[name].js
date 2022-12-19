import { CircularProgress,Container } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import NavBar from "../../components/nav"
import Layout from "../../components/layout"
 var getSearchResults = (name,setResult)=>{
    console.log(name)
    axios.get('/myapi/product/category', {
        params:{
            category:name
        }
    }).then((res)=>{
        setResult(res.data)
    }).catch((e)=>{
        console.log(e)
    })
 }

export default function SearchResults(){
    const [result,setResult] = useState(null) // API检索结果, 初始值为空
    var elem = null // 将要显示的内容, 设置为空
    const router = useRouter()
    const {name} = router.query // 读取地址栏路由中, 商品类目的内容

    if(result==null){ // 如果还未获得结果
        elem = <CircularProgress/> // 显示加载进度条
        getSearchResults(name,setResult) // 并且调用函数, 对api进行访问, 和加载.
    }else if(result.status!='Ok'){ // 如果加载完毕, 但返回状态码不为Ok
        elem = <div>Wrong</div> // 显示出错信息
    }else if(result.products==[]){ // 如果搜索结果为空
        elem = <div>No Item Found</div> // 显示: 没有找到商品
    }else{ // 如果成功, 并且存在商品, 则显示商品.
        elem = result.products.map(({id,name,price,category,stock,imgurl,description})=>{
            return <>
            <Link href={encodeURI(`/products/${id}`)}>
            <h1>{name}</h1>
            </Link>
            <h2>{price}</h2>
            <p>{category}</p>
            <p>{stock}</p>
            <img src={imgurl} height='200px'></img>
            <p>{description}</p>
            </>
        })
    }

    return <div>
        <NavBar/>
        <Layout>
        <h1>类型{`"${name}"`}下的所有商品:</h1>
        {elem}
        </Layout>

    </div>
}