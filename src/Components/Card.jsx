import React,{ useState} from "react";
import { connect} from "react-redux";
import { AddProduct,RemoveProduct} from "./Action"

const Card=({product, AddProduct, RemoveProduct})=>{
const [item,setItem]=useState("");
const submitHandler=async e=>{
    e.preventDefault();
    if(item!==""){
        await AddProduct({name:item});
        setItem("")
    }
    setItem("");
}
return(
    <div>
<center>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Add Product"value={item} onChange={(e)=>setItem(e.target.value)}/>
        <button type="submit">Add Product</button>
    </form><br/>
    {product.map((product)=>{
        <div>{product.name}
        <span onClick={()=>RemoveProduct(product.name)}>
            X
        </span>

        </div>
    })}
</center>
    </div>
)
}
const mapStateToProps=state=>({
    product:state
})
export default  connect(mapStateToProps)(Card);