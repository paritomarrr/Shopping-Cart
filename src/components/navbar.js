import React, {useContext} from 'react'
import {CartContext} from '../components/Global/CartContext'
import './navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const {qty} = useContext(CartContext);
    return (
        <div> 
            <div className="nav1">
            <nav className="navbar">
                <ul className="Left">
                    <li className="infinity"><Link to="/">Modern Walk</Link></li>
                </ul>
                <ul className="Right">
                    <li><Link to="cart"><span className="cart"><i class="fas fa-truck"></i>
                      <span className="cartCount">{qty}</span>
                    </span></Link></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default Navbar;
