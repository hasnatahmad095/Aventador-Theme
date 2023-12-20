import React from "react";
import Nav from "./Nav";
import Slidertwo from "../Components2/Slidertwo";
import Footer from "./Footer"
import Feature from "./Feature";
import Prodcards from "../Prodcards";
import Carousel from "./Carousel";
import Twocards from "./Twocards";


class Hometwo extends React.Component{
    render(){
        return(
            <>

            <Nav />
            <Slidertwo />
            <Feature />
            <Prodcards/>
            <Carousel/>
            <Twocards/>
            <Footer />

            </>
        )
    }
}

export default Hometwo