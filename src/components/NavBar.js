import React from 'react';

const NavBar = props => {
    return (
        <nav>
            <a href='/'><i className="fas fa-tractor" alt="tractor"> Farm Fresh</i></a>
            <a href=''>Shop</a>
            <a href='/farms'>Farms</a>
            <a href=''>About Us</a>
            <a href=''><i className="fas fa-shopping-cart" alt="shopping cart"></i></a>
            <a href='/login'>Sign In</a>
            <button className='sellBtn'><a href='/register'>Click Here to Register</a></button>
        </nav>
    )
}

export default NavBar;