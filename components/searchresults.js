import { CircularProgress } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

var items=[
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 , picurl:'/'},
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 , picurl:'/'},
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 , picurl:'/'}
 ]

 var getSearchResults = (name,setResult)=>{
    axios.get('/myapi/product/search', {
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

    useEffect(()=>{
        setResult(null)
    })

    if(result==null){
        elem = <CircularProgress/>
    }else if(result==[]){
        elem = <div>No Item Found</div>
    }else{
        console.log(result)
        // elem = []
        elem = result.map(({name,price,category,stock,imgurl,description})=>{
            <>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{category}</p>
            <p>{stock}</p>
            <img src={imgurl}></img>
            <p>{description}</p>
            </>
        })
    }

    return <div>
        <h1>搜索结果</h1>
        {elem}
        {/* {items.map(({name,cost,picurl})=>
            <div>
                <div>Pic of {picurl}</div>
                <div>{name}</div>
                <div>{cost}</div>
            </div>
        )} */}
    </div>
}