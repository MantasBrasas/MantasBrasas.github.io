import { Routes, Route } from 'react-router-dom'

import Home from "../Pages/Home.jsx"
import Portfolio from "../Pages/Portfolio.jsx";

function Body(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/portfolio' element={ <Portfolio/> }/>
        </Routes>
    );
}

export default Body