import React from "react";
import Nav from "../Components/Nav"
import Slider3 from "./Slider3";
import Feature from "../Components/Feature"
import Fourcards from "../Components/Fourcards"
import Twocards from "../Components/Twocards"
import Footer from  "../Components/Footer"
import Green from "./Green";

class Home3 extends React.Component{
    render(){
        return(
            <>
            <Nav />
            <Slider3/>
            <Feature />
            <Fourcards />
            <Twocards />
            <Green />
            <Footer />
            </>
        )
        
        
    }
}
export default Home3