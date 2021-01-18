import React, { useEffect, useState } from 'react'
import { CardCategory } from './CardCategory'

const baseUrl = process.env.REACT_APP_API_URL;

export const Home = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        
        fetch(`${baseUrl}/categories`)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                setCategories(data);
            });

    }, [])

    return (
        <div>
            <div style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
                backgroundSize: "cover",
                height: "100vh"
            }}>

            </div>

            <br />
            <h3 className="text-center">Categories</h3>
            <br />
            
            <div className="container mb-5">
            
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        categories.map( item => <CardCategory key={item.id} category={item}/>)
                    }
                    
                </div>

            </div>
        </div>
    )
}
