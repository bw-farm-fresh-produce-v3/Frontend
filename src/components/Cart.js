import React from 'react';
import Footer from './Footer';

const ShoppingCart = props => {

    const onClick = e => {
        window.location.href='/produce';
    }

    return (
        <section className='cartContainer'>
            <h2>Shopping Cart</h2>
            <div className='cartBody'>
                <div className='itemList'>
                    Added items to go here
                </div>
                <div className='orderSummary'>
                    <div className='summary'>
                        <h3>Order Summary</h3>
                        <p>Subtotal</p>
                        <p>Delivery Method</p>
                        <p>Contact Details</p>
                        <p>Total (tax included)</p>
                    </div>
                    <div className='cartBtns'>
                        <button className='checkoutBtn'>Go to Checkout</button>
                        <button className='continue' onClick={onClick}>Continue shopping</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default ShoppingCart;