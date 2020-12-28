import React, {createContext, useState} from 'react';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';
import product5 from '../../assets/product5.jpg';
import product6 from '../../assets/product6.jpg';
import product7 from '../../assets/product7.jpg';
import product8 from '../../assets/product8.jpg';

export const ProductsContextProvider = createContext();
const ProductsContext = (props) => {
    const [products] = useState([
        //objects 
        {id: 1, name: 'Product1', price: '3500' , sale: '20%', image: product1},
        {id: 2, name: 'Product2', price: '2600' , sale: '50%', image: product2},
        {id: 3, name: 'Product3', price: '3400' , sale: '20%', image: product3},
        {id: 4, name: 'Product4', price: '3900' , sale: '20%', image: product4},
        {id: 5, name: 'Product5', price: '2300' , sale: '50%', image: product5},
        {id: 6, name: 'Product6', price: '4700' , sale: '20%', image: product6},
        {id: 7, name: 'Product7', price: '1500' , sale: '40%', image: product7},
        {id: 8, name: 'Product8', price: '1100' , sale: '40%', image: product8}
    ]);
    return (
        <div>
            <ProductsContextProvider.Provider value={{products: [...products]}}>
             {props.children}
            </ProductsContextProvider.Provider>
        </div>
    )
}

export default ProductsContext;
