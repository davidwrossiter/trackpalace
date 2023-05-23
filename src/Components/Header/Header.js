import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import DropDownMenu from '../DropDownMenu/DropDownMenu';
import icon from '../../Icons/ShoppingCartSimple.svg'
import { selectNumberItemsInCart } from '../../features/cartItems/cartItemsSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const cartTotal = useSelector(selectNumberItemsInCart)

  return (
    <div className="header">
      <header>
        <nav>
          <div className="header-title">
            <ul className='the-best'><li><Link to="/">TRACK PALACE</Link></li></ul>
        
          </div>
          <div className="header-links">
              <ul>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/buy">Buy</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart"><div className='numberOfCartItemsHeader'><img src={icon}/><p>{cartTotal}</p></div></Link></li>
              </ul>
          </div>
          <div className="header-mobile-icon">
            
          </div>
        </nav>
        
      </header>
      <div id='header-line'></div>
    </div>
  );
}

export default Header;