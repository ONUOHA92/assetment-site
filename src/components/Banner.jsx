import React from 'react';

import Button from "@material-ui/core/Button"
import vectorone from "../svg/vector1.svg"
import money from '../svg/money.svg'
import '../styles/banner.css'


const Banner = () => {
    return (
        <div className="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div style={{marginTop: "100px", marginLeft: "50px"}}>
                        <h1>Cooperative</h1>
                        <h3>contributors platform</h3>
                        <p>Kolopurse gives you awesome returns. No penalties.
                            No fees attached. Absolutely free.</p>
                        <Button variant="contained" color="primary">
                            Get Started
                        </Button>
                        </div>
                    </div>
                    <div class="col-md-6" >
                        <img src={money}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;