import React, { Component } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Estudiantes from '../components/Estudiantes';
import Navbar from '../components/Navbar';
export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
               <Routes>
                   <Route path="/Estudiantes" element={<Estudiantes/>}/>
               </Routes>
            </BrowserRouter>
        )
    }
}