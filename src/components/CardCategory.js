import React from 'react';
import { useHistory } from "react-router-dom";

export const CardCategory = ( props) => {

    let history = useHistory();
    const category = props.category;

    const handleClickCategory = () =>{
        history.push(`/category/${category.id}`);
    }
    
    return (
        <div className="col" >
            <div className="card" style={{cursor:"pointer"}} onClick={ ()=> { handleClickCategory()}}>
                <img src={category.image} className="card-img-top " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{category.name}</h5>
                    <p className="card-text">{category.description}</p>
                </div>
            </div>
        </div>
    )
}
