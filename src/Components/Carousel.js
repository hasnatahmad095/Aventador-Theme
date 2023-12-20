
import React from "react";
class Carousel extends React.Component {
    render() {
        return (
            <>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active ">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/bkg_testtimor.jpg?v=1613507033" class="d-block w-100" alt="..." />
                            <div class="carousel-caption pos d-md-block">

                                <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/testimor1-64x64_64x64.png?v=1613507033" alt="" className="img mt-5" />
                                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id inventore facere ut sed cum temporibus ducimus expedita officia neque aliquid, delectus obcaecati non magnam omnis doloremque accusantium quia dolores.</p>
                                <h5>First slide label</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/bkg_testtimor.jpg?v=1613507033" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none pos d-md-block">

                                <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/testimor1-64x64_64x64.png?v=1613507033" alt="" className="img mt-5" />
                                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id inventore facere ut sed cum temporibus ducimus expedita officia neque aliquid, delectus obcaecati non magnam omnis doloremque accusantium quia dolores.</p>
                                <h5>Second slide label</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/bkg_testtimor.jpg?v=1613507033" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none pos d-md-block">

                                <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/testimor1-64x64_64x64.png?v=1613507033" alt="" className="img mt-5" />
                                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi id inventore facere ut sed cum temporibus ducimus expedita officia neque aliquid, delectus obcaecati non magnam omnis doloremque accusantium quia dolores.</p>
                                <h5>Third slide label</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}

export default Carousel