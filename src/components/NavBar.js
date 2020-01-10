import React from 'react';

const NavBar = props => {
    return (
        <nav>
            <a href='https://farm-fresh-produce3.netlify.com/'><i className="fas fa-tractor" alt="tractor"> Farm Fresh</i></a>
            <a href='/produce'>Shop</a>
            <a href='/farms'>Farms</a>
            <a href='https://farm-fresh-produce3.netlify.com/about.html'>About Us</a>
            <a href='/cart'><i className="fas fa-shopping-cart" alt="shopping cart"></i></a>
            <a href='/login'>Sign In</a>
            <button className='sellBtn'><a href='/register'>Click Here to Register</a></button>
        </nav>
    )
}

export default NavBar;