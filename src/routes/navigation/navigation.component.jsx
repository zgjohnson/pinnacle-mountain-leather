import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as LeatherLogo } from '../../assets/crown.svg';

import './navigation.styles.scss'

const Navigation = () => {
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
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
