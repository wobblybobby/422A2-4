import React from 'react'
import {Link} from "react-router-dom";

//import logo from "../image/samplelogo.JPG";
import logoSmoked from "../image/samplelogoSmoked.JPG";

const Header = () => {
    return (
        <header>
                <nav className="navbar navbar-default navbar-toggleable-sm">
                    <div className="container-fluid">
                        <div className ="navbar-header">
                            <img src={logoSmoked} alt="sample logo" class="navbar-brand"></img>
                        </div>
                        <li>
                            <Link to="/" style={{textDecoration: 'none', fontWeight: 'bold'}}>Home</Link>
                        </li>
                        <li>
                            <Link to="/allProducts" style={{textDecoration: 'none', fontWeight: 'bold'}}>Products</Link>
                        </li>
                        <li>
                            <Link to="/customer/register" style={{textDecoration: 'none', fontWeight: 'bold'}}>Sign Up</Link>
                        </li>
                        <li>
                            <div class="input-group">
                                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                <button type="button" class="btn btn-outline-primary" style={{backgroundColor : 'white'}}>Search</button>
                            </div>
                        </li>
                    </div>
                </nav>
        </header>
    )
}

export default Header;