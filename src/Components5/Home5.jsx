import React from "react";
import Nav from "../Components/Nav";
import Slider5 from "./Slider5";
import Feature from "../Components/Feature";
import Brand from "../Components/Brands";
import Fourcards from "../Components/Fourcards";
import Carousel from "../Components/Carousel"
import Twocards from "../Components/Twocards";
import Footer from "../Components/Footer";

class Home5 extends React.Component{
    render(){
        return(
            <>
            <Nav />
            <Slider5 />
            <Feature />
            <Brand />
            <Fourcards />
            <Carousel />
            <Twocards />
            <Footer />

            </>
        )
    }
}

export default Home5