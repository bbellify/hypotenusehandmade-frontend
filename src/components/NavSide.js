import React from 'react'

import Container from 'react-bootstrap/Container'

function NavSide(props) {

    return (
        <div className='col-3 col-lg-2 d-none d-sm-block'>
            <Container className='d-flex-column ps-3 my-5'>
                <p className='fs-4'>Items</p>
                    <p>tops</p>
                    <p>bottoms</p>
                    <p>dresses</p>
                    <p>hats/hankies</p>
                <p className='fs-4 mt-4'>Categories</p>
                    <p>Women</p>
                    <p>Men</p>
                    <p>Babies</p>
            </Container>
        </div>
            
    )
}

export default NavSide