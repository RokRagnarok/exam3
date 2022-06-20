import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './Components/App';
import Inicio from './Components/Inicio/Inicio';
import Foto from './Components/Foto';
import Contact from './Components/Contact/Contact';
import Game from './Components/Game/Game';
const AppRoutes = () => (


    <App>
        <Routes>
            <Route path='/'element ={<Inicio/>}  />
            <Route path='/Foto'element ={<Foto/>} /> 
            <Route path='/Curriculum'element ={<Curriculum/>} />  
            <Route path='/Game' element={<Game/>} />
            <Route path='/Todo' element={<Todo/>} />
            <Route path='/Animation' element={<Animation/>} />
            <Route path='/Crypto' element={<Crypto/>} />
            <Route path='/Numbers' element={<Numbers/>} />
        </Routes>
   </App>
)

export default AppRoutes;