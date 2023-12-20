import React from 'react'
import "./App.css"
import Home from './Components/Home'
import Hometwo from './Components/Hometwo'
import Home5 from './Components5/Home5'

import { BrowserRouter,Route , Routes} from "react-router-dom"
import Home3 from './Components3/Home3'
import Home4 from './Components4/Home4'
import Home6 from './Components6/Home6'

class App extends React.Component{

  render(){
    return(
      <>
      <BrowserRouter> 
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="home1" element={<Hometwo />} />
        <Route path='home3' element={<Home3/>} />
        <Route path='home4' element={<Home4/>}/>
        <Route path='home5' element={<Home5/>}/>
        <Route path='home6' element={<Home6/>}/>



      </Routes>
      </BrowserRouter>
      </>
    )
      

    
  }
}

export default App