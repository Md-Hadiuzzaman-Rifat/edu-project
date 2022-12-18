import React from 'react';
import {useParams} from "react-router-dom"

const Shop = () => {
    const params=useParams()
    return (
        <div>
            <h2>This is Shop.</h2>
            <h3>{params.shopId}</h3>
        </div>
    );
};

export default Shop;