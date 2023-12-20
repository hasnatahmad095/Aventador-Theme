import React from "react";
import Nav from "../Components/Nav";
import Slider4 from "./Slider4";
import Feature from "../Components/Feature"
import Fourcards from "../Components/Fourcards"
import Twocards from "../Components/Twocards"
import Footer from "../Components/Footer"


class Home4 extends React.Component{
render(){
    return(
        <>
        <Nav />
        <Slider4 />
        <Feature />
        <Fourcards />
        <Twocards />
        <Footer />
        </>
    )
}

}
export default Home4