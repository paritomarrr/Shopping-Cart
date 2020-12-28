import React, { useContext } from 'react';
import Cover from './cover';
import { ProductsContextProvider } from './Global/ProductsContext';
import {CartContext} from '../components/Global/CartContext';

const Products = () => {
    const {products} = useContext(ProductsContextProvider);
   const {dispatch} = useContext(CartContext);
    return (
        <div className="container">
            <Cover />
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                   
                    <div className="product__image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product__details">
                        <div className="product__name">
                            {product.name}
                        </div>
                    </div>
                    <div className="product__price">
                        {product.price} INR
                    </div>
                  
                   
                    <div className="add_to_cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product })}>
                        Add to Cart
                    </div>
                      {product.sale === '20%' ? <div className="twenty">20% Off</div> : ''}
                    {product.sale === '40%' ? <div className="twenty">40% Off</div> : ''}
                    {product.sale === '50%' ? <div className="twenty">50% Off</div> : ''}
                </div>
                
            ))}
        </div>
        </div>
    )
}

export default Products
