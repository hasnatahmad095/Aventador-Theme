import React from 'react'

class Slider6 extends React.Component {
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
                            <div className='layer'>
                                <p className='text-light fontc'>TYPI NON HABENT CLARITATEM INSITAM</p>
                                <h1 className='text-light fontc'>Experience The Power Within</h1>
                                <p className='text-light fontc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Aliquam dolor voluptate cumque aspernatur totam voluptates vel mollitia.</p>
                            </div>
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider2-t902-1920x976_1920x846.progressive.jpg?v=1628378107" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <div className='layer'>
                                <p className='text-light fontc '>TYPI NON HABENT CLARITATEM INSITAM</p>
                                <h1 className='text-light fontc'>Experience The Power Within</h1>
                                <p className='text-light fontc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Aliquam dolor voluptate cumque aspernatur totam voluptates vel mollitia.</p>
                            </div>
                            <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-t902-1920x976_1920x846.progressive.jpg?v=1628378128" class="d-block w-100" alt="..." />
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

export default Slider6