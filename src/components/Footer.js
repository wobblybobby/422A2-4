import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4">
            <div class="container-fluid text-center text-md-left">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Bobby's ShopMart React App</h5>
                        <p>This website is created using React for WEB422</p>
                    </div>
                    <hr class="clearfix w-100 d-md-none pb-3"></hr>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Information</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="/dummy">About</a>
                            </li>
                            <li>
                                <a href="/dummy">Return Policy</a>
                            </li>
                            <li>
                                <a href="/dummy">Shipping Information</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Social Media</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="/dummy">Facebook</a>
                            </li>
                            <li>
                                <a href="/dummy">Twitter</a>
                            </li>
                            <li>
                                <a href="/dummy">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>
        </footer>
    )
}

export default Footer;