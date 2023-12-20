import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <>
            <div class="container-fluid bgimg">
                <div className="row p-5">
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex flex-column">
                        <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/logo-aero1_c79eb9d5-3b65-4c27-ac70-8b4c0c3ec086.png?v=1613507407" alt="" className="w-25" />
                        <p className="text-light mt-5">We are a team of designers and developers who creates high quality premium Shopify themes.</p>
                        <p className="text-light">Address : No 40 Baria Sreet 133/2, NewYork, USA.</p>
                        <p className="text-light">Phone : (012) 800 456 789</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                        <ul>
                        <li className="list fw-bold text-light">Main Menu</li>
                            <li className="list text-light">Home</li>
                            <li className="list text-light">Shop</li>
                            <li className="list text-light">Faetured</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                        <ul>
                            <li className="list fw-bold text-light">Main Menu</li>
                            <li className="list text-light">Home</li>
                            <li className="list text-light">Shop</li>
                            <li className="list text-light">Faetured</li>
                        </ul>
                    </div>
                </div>
                <hr />
                
                <div class="row p-5">
                    <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                        <p className="text-light">Copyright 2022</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                        <p className="text-light">All Rights Reserved</p>
                    </div>
                    <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                        <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/payment.png?v=1613507059" alt="" />
                    </div>
                </div>
                
            </div>

            </>
        )
    }
}

export default Footer