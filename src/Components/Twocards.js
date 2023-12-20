import React from "react";

class Twocards extends React.Component {
    render() {
        return (
            <>
                <div class="container-fluid p-0 m-0">

                    <div class="row m-0 p-0">

                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 m-0 p-0 position-relative">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img1-bottom-aero1.jpg?v=1613507033" alt="" className="w-100" />
                            <div className="showhovr">
                                <p className="text-light fw-bold text-center">HONDA MOTORCYCLES</p>
                                <p className="text-warning fw-bold fs-6 minus">RED SALE ENDS APRIL 30</p>
                                <p className="text-light fw-bold text-center">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>


                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-0 m-0 position-relative">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img2-bottom-aero1.jpg?v=1613507033" alt="" className="w-100" />
                            <div className="showhovr">
                                <p className="text-light fw-bold text-center">HONDA MOTORCYCLES</p>
                                <p className="text-warning fw-bold fs-6 minus">RED SALE ENDS APRIL 30</p>
                                <p className="text-light fw-bold text-center">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </>

        )
    }
}

export default Twocards