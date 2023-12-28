export default function Product () {
    //const products = ["phone",'laptop','TV','keyboard'];
    //const productList = products.map((product,index)=> <h3 key={index}>{product}</h3>)
    const prodObj = [
        {id:1, name:'Laptop', price:500},
        {id:2, name:'Phone', price:100},
        {id:3, name:'Laptop', price:700}
    ];
    
    return <div>
        {/* {productList} */}
        {prodObj.map((product)=>
            <h3 key={product.id}>{product.name} : £{product.price}</h3>
        )}
    </div>
}