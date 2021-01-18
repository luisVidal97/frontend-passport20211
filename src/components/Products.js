import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom'
import { CardProduct } from './CardProduct';

const baseUrl = process.env.REACT_APP_API_URL;

const style = {
    backgroundImage: "url(https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
    backgroundSize: "cover",
    height: "100vh",
    
}

export const Products = () => {

    const params = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
              
        fetch(`${baseUrl}/category/${params.id}`)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                setProducts(data);
            });

    }, [params.id]);
    
    return (
        <div>
            
            <div style={style}></div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map( item => <CardProduct key={item.id} product={item} category={params.id}/>)
                }
                </div>
            </div>

        </div>
    )
}
