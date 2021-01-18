import React from 'react';

const style = {
    height:"200px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
}

export const Footer = () => {
    return (
        <footer className="bg-primary" style={ style }>
            <h3 className="my-auto text-light">&copy; Store 2021-1</h3>
        </footer>
    )
}
