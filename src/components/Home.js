import React from 'react';

import men from '../assets/men.jpg'
import crib from '../assets/crib.jpg'
import women from '../assets/women.jpg'

function Home(props) {

    return (
        <div className='text-center text-sm-start p-3' style={{backgroundColor: '#F4ECE1', height: '1000px'}}>
        
            <h2 className='px-1'>hypotenuse handmade</h2>
            <div className='mt-4 d-flex' style={{backgroundColor: '' }}>
                <div className='col-6'>
                    <img src={crib} className='p-1'style={{width: '50%'}} alt='crib'/>
                    <img src={women} className='p-1'style={{width: '50%'}} alt='folding'/>
                    <img src={men} className='p-1'style={{width: '100%'}} alt='chair'/>
                </div>
                <div className='col-6'>
                    <img src={crib} className='p-1'style={{width: '100%'}} alt='crib'/>
                    <img src={women} className='p-1'style={{width: '50%'}} alt='folding'/>
                    <img src={men} className='p-1'style={{width: '50%'}} alt='chair'/>
                </div>
            </div>
        </div>
        )
}

export default Home;