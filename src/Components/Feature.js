import React from "react";

class Feature extends React.Component {
    render() {
        return (
            <>
                <div class="container-fluid bg-black p-4">
                    <div className="row d-flex justify-content-evenly">
                        <div className="col-12 mt-3 col-lg-4 col-md-7 col-sm-9 hovr mt-md-5 mt-sm-3">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img1-top-aero1.jpg?v=1613507033" alt="" className="w-100" />
                            <div className="showhovr">
                                <p className="text-light fw-bold text-center">HONDA MOTORCYCLES</p>
                                <p className="text-warning fw-bold fs-6 minus ">RED SALE ENDS APRIL 30</p>
                                <p className="text-light fw-bold text-center ">SALE UP TO 40% OFF</p>
                            </div>
                        </div>
                        <div className="col-12 mt-3 col-lg-4 col-md-7 col-sm-9 hovr mt-md-5 mt-sm-3">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img2-top-aero1.jpg?v=1613507033" alt="" className="w-100" />
                            <div className="showhovr">
                                <p className="text-light fw-bold text-center">HONDA MOTORCYCLES</p>
                                <p className="text-warning fw-bold fs-6 minus">RED SALE ENDS APRIL 30</p>
                                <p className="text-light fw-bold text-center">SALE UP TO 40% OFF</p>
                            </div>
                        </div>
                        <div className="col-12 mt-3 col-lg-4 col-md-7 col-sm-9 hovr mt-md-5 mt-sm-3">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img3-top-aero1.jpg?v=1613507033" alt="" className="w-100" />
                            <div className="showhovr">
                                <p className="text-light fw-bold text-center">HONDA MOTORCYCLES</p>
                                <p className="text-warning fw-bold fs-6 minus ">RED SALE ENDS APRIL 30</p>
                                <p className="text-light fw-bold text-center">SALE UP TO 40% OFF</p>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

export default Feature