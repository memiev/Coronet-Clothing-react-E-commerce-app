import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/coronet.svg';
import { default as Logo } from '../../assets/coronet.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={Logo} alt="logo" />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
      </Link>
            <Link className='option' to='/shop'>
                CONTACT
      </Link>
        </div>
    </div>
);

export default Header;

