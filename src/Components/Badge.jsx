import React from "react";
import { connect } from "react-redux";

export function Badge({product}){
return(
    <div>
        <center>
            <button type="button" >
                Total Products
            </button>
            <span>{product.length}</span>
        </center>
    </div>
)
}
const mapStateToProps =state=>({
    product : state
})
export default connect(mapStateToProps)(Badge);