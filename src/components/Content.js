import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './contents/Home'
import Test from './contents/Test'


function Content(props) {

    return (
        <div className='d-flex pt-5'>
            <div className='col-3 col-lg-2 d-none d-sm-block '></div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/test'} element={<Test />}/>

                </Routes>
            </div>
            
        </div>
        )
}

export default Content;