import { CircularProgress } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import NavBar from "../../components/nav"
import Layout from "../../components/layout"

var items=[
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 , picurl:'/'},
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 , picurl:'/'},
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 , picurl:'/'}
 ]

 var getSearchResults = (name,setResult)=>{
    axios.get('myapi/product/search', {
        params:{
            name:name
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
        <h1>搜索{`"${name}"`}的结果</h1>
        {elem}
        </Layout>
    </div>
}