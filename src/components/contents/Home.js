import React from 'react';
import { useNavigate } from 'react-router-dom'

function Home(props) {

    const navigate = useNavigate()



    return (
        <div className='border position-absolute p-3' style={{backgroundColor: '#F4ECE1', height: '1000px' }}>

                <h2 className='px-1 '>hypotenuse handmade</h2>
                <div className='mt-4 d-flex'>
                    <div className='col-6 d-flex flex-wrap'>

                        <div className='w-50 position-relative img_mask' onClick={()=>navigate('/test')}>
                            <p className='img_description top-50 start-50 translate-middle fw-bold' >babies</p>
                            <img src={'https://images.pexels.com/photos/4964290/pexels-photo-4964290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1 w-100 img_img' alt='babies'/>
                            

                        </div>
                        <div className='w-50 position-relative img_mask'>
                            <p className='img_description top-50 start-50 translate-middle fw-bold'>women</p>
                            <img src={'https://images.pexels.com/photos/5582933/pexels-photo-5582933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1 w-100 img_img' alt='women'/>

                        </div>
                        <div className='w-100 position-relative img_mask'>
                            <p className='img_description top-50 start-50 translate-middle fw-bold'>men</p>
                            <img src={'https://images.pexels.com/photos/5988920/pexels-photo-5988920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1 w-100 img_img' alt='men'/>
                        </div>

                    </div>
                    <div className='col-6 d-flex flex-wrap'>
                    <div className='w-100 position-relative img_mask'>
                            <p className='img_description top-50 start-50 translate-middle fw-bold'>babies</p>
                            <img src={'https://images.pexels.com/photos/4964290/pexels-photo-4964290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1 w-100 img_img' alt='babies'/>
                            

                        </div>
                        <div className='w-50 position-relative img_mask'>
                            <p className='img_description top-50 start-50 translate-middle fw-bold'>women</p>
                            <img src={'https://images.pexels.com/photos/5582933/pexels-photo-5582933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1 w-100 img_img' alt='women'/>

                        </div>
                        <div className='w-50 position-relative img_mask'>
                            <p className='img_description top-50 start-50 translate-middle fw-bold'>men</p>
                            <img src={'https://images.pexels.com/photos/5988920/pexels-photo-5988920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} className='p-1 w-100 img_img' alt='men'/>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Home;