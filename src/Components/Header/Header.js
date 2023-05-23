import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import DropDownMenu from '../DropDownMenu/DropDownMenu';
import icon from '../../Icons/ShoppingCartSimple.svg'

const Header = () => {
  return (
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
              <li><Link to="/cart"><div className='numberOfCartItemsHeader'><img src={icon}/><p>10</p></div></Link></li>
            </ul>
        </div>
        <div className="header-mobile-icon">
          
        </div>
      </nav>
    </header>
  );
}

export default Header;