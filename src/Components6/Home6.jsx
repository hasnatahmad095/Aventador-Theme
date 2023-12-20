import React from "react";
import Nav from "../Components/Nav"
import Slider6 from "./Slider6";
import Carousel from "../Components/Carousel"
import Text from "../Components6/Text"
import Threecards from "./Threecards";

class Home6 extends React.Component{
    render(){
        return(
            <>
            <Nav />
            <Slider6 />
            <Text />
            <Threecards />
            <Carousel />
            </>
        )
    }
}

export default Home6