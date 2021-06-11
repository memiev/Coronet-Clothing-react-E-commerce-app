import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/coronet.svg';
import { default as Logo } from '../../assets/coronet.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CardDropdown from '../cart-dropdown/cart-dropdown.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';



const Header = ({ currentUser, hidden }) => (
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
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null :
            <CartDropdown />}
        {/* if hidden === hide CardDropdown */}
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({ //destructuring the state
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);

