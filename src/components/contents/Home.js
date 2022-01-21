import React from 'react';

function Home(props) {

    return (
        <div className='text-center text-sm-start p-3' style={{backgroundColor: '#F4ECE1', height: '1000px'}}>
            
                <h2 className='px-1'>hypotenuse handmade</h2>
                <div className='mt-4 d-flex' style={{backgroundColor: '' }}>
                    <div className='col-6'>
                        <img src={'https://images.pexels.com/photos/4964290/pexels-photo-4964290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1'style={{width: '50%'}} alt='crib'/>
                        <img src={'https://images.pexels.com/photos/5582933/pexels-photo-5582933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1'style={{width: '50%'}} alt='women'/>
                        <img src={'https://images.pexels.com/photos/5988920/pexels-photo-5988920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1'style={{width: '100%'}} alt='men'/>
                    </div>
                    <div className='col-6'>
                        <img src={'https://images.pexels.com/photos/4964290/pexels-photo-4964290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1'style={{width: '100%'}} alt='crib'/>
                        <img src={'https://images.pexels.com/photos/5582933/pexels-photo-5582933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1'style={{width: '50%'}} alt='women'/>
                        <img src={'https://images.pexels.com/photos/5988920/pexels-photo-5988920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1'style={{width: '50%'}} alt='men'/>
                    </div>
                </div>
            </div>
        )
}

export default Home;