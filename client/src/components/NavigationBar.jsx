import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className='row mb-4'>
      <div className='col-4'>
        <Link to='/' className='btn btn-primary'>
          Click here to go to Home Page
        </Link>
      </div>
      <div className='col-4'>
        <Link to='/create-user' className='btn btn-success'>
          Click here to go to create an user page
        </Link>
      </div>
      <div className='col-4'>
        <Link to='/display-user' className='btn btn-info'>
          Click here to go to display all users page
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;