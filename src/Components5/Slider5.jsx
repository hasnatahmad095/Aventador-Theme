import React from 'react'

class Slider5 extends React.Component {
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
                        <div class="carousel-item active position-relative">
                        <div className="overlay position-absolute">
                            <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <h1 className='text-light fw-bold'>Explore The Range</h1>
                            <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis ea ratione eaque inventore deleniti maxime enim qui, saepe debitis ullam repellat nobis. Totam maiores sed necessitatibus fuga veniam ullam.</p>
                        </div>
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider3-aero3-1920x943.jpg?v=1613507176" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <div className="overlay position-absolute">
                            <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <h1 className='text-light fw-bold'>Explore The Range</h1>
                            <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis ea ratione eaque inventore deleniti maxime enim qui, saepe debitis ullam repellat nobis. Totam maiores sed necessitatibus fuga veniam ullam.</p>
                        </div>
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider3-aero3-1920x943_1920x846.progressive.jpg?v=1613507176" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <div className="overlay position-absolute">
                            <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            <h1 className='text-light fw-bold'>Explore The Range</h1>
                            <p className='text-light text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi omnis ea ratione eaque inventore deleniti maxime enim qui, saepe debitis ullam repellat nobis. Totam maiores sed necessitatibus fuga veniam ullam.</p>
                        </div>
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.progressive.jpg?v=1613507176" class="d-block w-100" alt="..." />
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

export default Slider5