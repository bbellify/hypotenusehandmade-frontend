import React from 'react'
import { NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

function NavSide(props) {

    return (
        <div className='col-3 col-lg-2 d-none d-sm-block position-fixed pt-5 '>
            <Container className='d-flex-column ps-3 my-5'>
                <p className='fs-4'>Handmades</p>
                    <div className='d-flex flex-column'>
                        <NavLink to='/test' className='my-2'>tops</NavLink>
                        <NavLink to='/bottoms' className='my-2'>bottoms</NavLink>
                        <NavLink to='/dresses' className='my-2'>dresses</NavLink>
                        <NavLink to='/hats-hankies' className='my-2'>hats/hankies</NavLink>
                    </div>
                <p className='fs-4 mt-4'>Categories</p>
                <div className='d-flex flex-column'>
                        <NavLink to='/kids' className='my-2'>kids</NavLink>
                        <NavLink to='/women' className='my-2'>women</NavLink>
                        <NavLink to='/men' className='my-2'>men</NavLink>
                    </div>
            </Container>
        </div>
            
    )
}

export default NavSide