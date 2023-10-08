import AboutPage from "../pages/AboutPage"
import ContentPage from "../pages/ContentPage"
import HomePage from "../pages/HomePage"

import {Routes,Route} from 'react-router-dom'
import Navbar from "./navbar"
import Juego from "../pages/Juego"
import TiendaPage from "../pages/TiendaPage"



const AppRouter = () =>{
    return <>
        <Navbar/>
        <Routes>
            <Route path= "/*" element={<HomePage/>}/>
            <Route path= "/home" element={<HomePage/>}/>
            <Route path= "/content" element={<ContentPage/>}/>
            <Route path= "/about" element={<AboutPage/>}/>
            <Route path= "/Tienda"element={<TiendaPage/>}/>
            <Route path= "/Juego"element={<Juego/>}/>
        </Routes>
    </>
        
    
}
export default AppRouter

