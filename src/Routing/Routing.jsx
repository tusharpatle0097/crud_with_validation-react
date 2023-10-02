import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrudUi from '../Pages/CrudUi';
import CrudUpdate from '../Pages/CrudUpdate';
import CrudV from '../Pages/CrudV';

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<CrudUi />}></Route>
                    <Route path='/crud-update/:id' element={<CrudUpdate />}></Route>
                    <Route path='/crud-v/:id' element={<CrudV />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing