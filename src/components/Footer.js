import React from 'react';

const Footer = props => {
    return (
        <footer>
            <div className='footerTop'>
                <div className='productColumn'>
                    <h5>Product</h5>
                    <a href=''>All Produces</a>
                    <a href=''>Learn About Our Farms</a>
                    <a href=''>Website Templates</a>
                    <a href=''>Customer Management</a>
                    <a href=''>Virtual Inbox</a>
                </div>
                <div className='companyColumn'>
                    <h5>Company</h5>
                    <a href=''>About Foundation</a>
                    <a href=''>Brand Guidelines</a>
                    <a href=''>Press Kit</a>
                    <a href=''>Support</a>
                </div>
                <div className='legalColumn'>
                    <h5>Legal</h5>
                    <a href=''>Privacy</a>
                    <a href=''>Terms</a>
                    <a href=''>Security</a>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='footerBtmLeft'>
                    <a href=''>Terms</a>
                    <a href=''>Privacy</a>
                    <a href=''>License</a>
                </div>
                <div className='footerBtmRight'>
                    <a href={'https://twitter.com/'} target={'_blank'}><i className="fab fa-twitter"></i></a>
                    <a href={'https://www.facebook.com/'} target={'_blank'}><i className="fab fa-facebook-square"></i></a>
                    <a href={'https://linkedin.com/'} target={'_blank'}><i className="fab fa-linkedin-in"></i></a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;