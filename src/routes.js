import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

//componentes:
import { Home } from './pages/home/Home'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
