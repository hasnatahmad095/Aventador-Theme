import React from 'react'

class Slider extends React.Component {
    render() {
        return (
            <>

                <div id="carouselExampleIndicators" class="carousel slide m-0 p-0">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider2-aero1-1920x846_1920x846.progressive.jpg?v=1613506944" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider3-aero1-1920x846_1920x846.progressive.jpg?v=1613506944" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero1-1920x846_1920x846.progressive.jpg?v=1613506944" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" id="prev">
                        <span class="carousel-control-prev-icon rounded-pill" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" id="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </>
        )
    }
}

export default Slider