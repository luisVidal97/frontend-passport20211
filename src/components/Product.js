import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
const baseUrl = process.env.REACT_APP_API_URL;

export const Product = () => {

    const params = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({}); 

    useEffect(() => {

        fetch(`${baseUrl}/category/${params.idCategory}/product/${params.idProduct}`)
        .then( response => response.json())
        .then( data => {
            console.log(data);
            setProduct(data);
        });

    }, [params.idCategory, params.idProduct ]);

    const goBack = () =>{
        history.goBack();
    }

    return (
        <div className="container"style={{ height:"90vh"}}>
            <div className="row " style={{height: "100%"}}>
                <div className="col-6 d-flex align-items-center">
                    <img src={product.image} alt="product" className="img-thumbnail " style={{ height: "500px", width: "100%"}}/>
                </div>

                <div className="col-6 d-flex flex-column justify-content-center align-items-center">

                    <h1>{product.name}</h1>
                    <br/>
                    <p>{product.description}</p>
                    <br/>
                    <h2 className="d-flex align-self-end text-primary">${product.price}</h2>
                    <br/>
                    <button className="d-flex align-self-end btn btn-outline-primary" onClick={ goBack }>Return</button>
                </div>
            </div>
        </div>
    )
}
