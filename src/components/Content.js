import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './contents/Home'


function Content(props) {

    return (
        <div className='d-flex pt-5'>
            <div className='col-3 col-lg-2'></div>
        
            <Routes>
                <Route path={'/'} element={<Home />} />

            </Routes>
            
        </div>
        )
}

export default Content;