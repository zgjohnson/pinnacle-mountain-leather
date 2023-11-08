import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as LeatherLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../context/user.context.jsx';

import { signOutUser } from '../../utils/firebase/firebase.utils.js'

import './navigation.styles.scss';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-contianer' to='/'>
          <LeatherLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
          <CartIcon/>
        </div>
        <CartDropdown/>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
