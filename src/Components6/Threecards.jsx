import React from "react";

class Threecards extends React.Component {
    render() {
        return (
            <>
                <div class="container-fluid bg-black p-4">


                    <div className="row d-flex justify-content-evenly">
                        <div className="col-12 mt-3 col-lg-4 col-md-7 col-sm-9 hovr mt-md-5 mt-sm-3">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img1-top-t904.jpg?v=1628366047" alt="" className="w-100" />
                            <div className="showhovrsix">
                                <p className="fw-bold fontc text-black">New Collection</p>
                                <h5 className="text-danger fw-bold fontc">New Trending</h5>
                                <p className="text-black fw-bold fontc">SALE UP TO 20% OFF</p>
                            </div>
                        </div>
                        <div className="col-12 mt-3 col-lg-4 col-md-7 col-sm-9 hovr mt-md-5 mt-sm-3">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img2-top-t904.jpg?v=1628366069" alt="" className="w-100" />
                            <div className="showhovrsix">
                                <p className="fw-bold fontc text-black">New Collection</p>
                                <h5 className="text-danger fw-bold fontc">New Trending</h5>
                                <p className="text-black fw-bold fontc">SALE UP TO 20% OFF</p>
                            </div>
                        </div>
                        <div className="col-12 mt-3 col-lg-4 col-md-7 col-sm-9 hovr mt-md-5 mt-sm-3">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/img3-top-t904.jpg?v=1628366085" alt="" className="w-100" />
                            <div className="showhovrsix">
                                <p className="fw-bold fontc text-black">New Collection</p>
                                <h5 className="text-danger fw-bold fontc">New Trending</h5>
                                <p className="text-black fw-bold fontc">SALE UP TO 20% OFF</p>
                            </div>
                        </div>
                    </div>


                </div>
            </>
        );
    }
}

export default Threecards