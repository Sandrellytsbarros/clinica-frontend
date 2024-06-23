import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

//👇🏻 component
import Dashboard from "./components/Dashboard";
import Medicos from "./components/Medicos";
import Pacientes from "./components/Pacientes";
import Consultas from "./components/Consultas";
import Login from "./components/Login";
import Signup from "./components/Signup";

//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
    return (
        <div>
            <ChakraProvider>
                <BrowserRouter>
                    <AuthProvider>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/registrar' element={<Signup />} />
                            <Route path='/medicos' element={<Medicos />} />
                            <Route path='/pacientes' element={<Pacientes />} />
                            <Route path='/consultas' element={<Consultas />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                        </Routes>
                    </AuthProvider>
                </BrowserRouter>
                <ToastContainer />
            </ChakraProvider>
        </div>
    );
};

export default App;