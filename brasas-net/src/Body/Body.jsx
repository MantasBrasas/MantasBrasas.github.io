import Home from "../Pages/Home.jsx"

import { Routes, Route } from 'react-router-dom'

function Body(){
    return(
        <Routes>
            <Route path='/' element={ <Home/> }></Route>
        </Routes>
    );
}

export default Body