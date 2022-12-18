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
    const [result,setResult] = useState(null)
    var elem = null
    const router = useRouter()
    const {name} = router.query

    if(result==null){
        elem = <CircularProgress/>
        getSearchResults(name,setResult)
    }else if(result.status!='Ok'){
        elem = <div>Wrong</div>
    }else if(result.products==[]){
        console.log('haha')
        elem = <div>No Item Found</div>
    }else{
        console.log(result)
        // elem = []
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