import React from 'react';
import comlogo from '../svg/comlog.svg'
import Button from '@material-ui/core/Button';
import '../styles/header.css'

const Header = () => {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={comlogo} alt=""  />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto ul-styles mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                    </ul>
                    <span className="navbar-text ml-4 Action-one" >
                        <Button variant="contained" style={{borderRadius:"50px" }} color="primary">
                            Create Account
                        </Button>
                    </span>
                </div>
            </div>
        </nav>
        <hr />
        </React.Fragment>
    );
};

export default Header;