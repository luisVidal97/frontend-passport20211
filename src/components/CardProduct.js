import React from 'react';
import { useHistory } from "react-router-dom";


export const CardProduct = (props) => {
   
    
    let history = useHistory();
    const product = props.product;
    const category = props.category;

    const handleClickproduct = () =>{
        console.log(product.id);
        history.push(`/category/${category}/product/${product.id}`);
    }
    
    return (
        <div className="col" >
            <div className="card" style={{cursor:"pointer"}} onClick={ ()=> { handleClickproduct()}}>
                <img src={product.image} className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text line-clamp">{product.description}</p>
                </div>
            </div>
        </div>
    )
}
