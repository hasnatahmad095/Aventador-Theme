import React from 'react'
import Slider from './Slider'
import Aero from './Aero'
import Nav from './Nav'
import Feature from './Feature'
import Prodcards from '../Prodcards'
import Carousel from './Carousel'
import Fourcards from './Fourcards'
import Twocards from './Twocards'
import Brand from './Brands'
import Footer from './Footer'


class Home extends React.Component {
    render() {
        return (

            <>
                <Slider />
                <Nav />
                <Aero />
                <Feature />
                <Prodcards />
                <Carousel />
                <Fourcards />
                <Twocards />
                <Brand />
                <Footer />
            </>


        )
    }
}

export default Home