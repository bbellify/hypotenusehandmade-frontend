import React from 'react'

import Container from 'react-bootstrap/Container'

function NavSide(props) {

    return (
        <div className='border col-3 d-none d-sm-block'>
            <Container className='d-flex-column text-center my-5 vh'>
                <h5>Women</h5>
                <h5>Men</h5>
                <h5>Kids</h5>
            </Container>
        </div>
            
    )
}

export default NavSide