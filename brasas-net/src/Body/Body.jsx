import Home from "../Pages/Home.jsx"
import ColourPicker from "../Pages/colourPicker/colourPicker.jsx";

import { Routes, Route } from 'react-router-dom'

function Body(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/colour-picker' element={ <ColourPicker/> }/>
        </Routes>
    );
}

export default Body