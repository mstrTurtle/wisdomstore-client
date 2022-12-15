
var items=[
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 , picurl:'/'},
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 , picurl:'/'},
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 , picurl:'/'}
 ]

export default function SearchResults(){
    return <div>
        <h1>搜索结果</h1>
        {items.map(({name,cost,picurl})=>
            <div>
                <div>Pic of {picurl}</div>
                <div>{name}</div>
                <div>{cost}</div>
            </div>
        )}
    </div>
}