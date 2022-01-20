import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { LinkContainer } from 'react-router-bootstrap/';
import { useNavigate } from 'react-router-dom'

function NavTop(props) {
    
    const navigate = useNavigate()

    const linkClick = (where) => {
        navigate(where)
    }

    return (
        
        <Navbar className='d-flex justify-content-between px-3 py-3 border-bottom' >
        
            <Navbar.Brand onClick={() => linkClick('/')} className='p-0 ms-4'>hh</Navbar.Brand>
            
            <p className='fst-italic fw-lighter m-0'>it is difficult to walk at one and the same time many paths of life</p>
            
            <div className='d-flex align-items-baseline m-0 me-2'>
                <a href='/' className='fs-4' style={{ color: 'black'}}><i className='bi bi-person px-2'></i></a>
                <a href='/' className='fs-4' style={{ color: 'black'}}><i className='bi bi-bag px-3'></i></a>
            </div>
            {/* 

            maybe make a list of these quotes to randomly display on page load
            alts:
            “Rest satisfied with doing well, and leave others to talk of you as they please.”
            “Let no one persuade you by word or deed to do or say whatever is not best for you.”
            “The oldest, shortest words— 'yes' and 'no'— are those which require the most thought.”
            “We ought so to behave to one another as to avoid making enemies of our friends, and at the same time to make friends of our enemies.”
            “Choose always the way that seems the best, however rough it may be; custom will soon render it easy and agreeable.”
            “Learn silence. With the quiet serenity of a meditative mind, listen, absorb, transcribe, and transform.”
            "Do not say a little in many words but a great deal in a few."
            "Number is the ruler of forms and ideas, and the cause of gods and demons."
            "Number was the substance of all things."
            "Geometry is knowledge of the eternally existent."
            "There is geometry in the humming of the strings, there is music in the spacing of the spheres."
            “Salt is born of the purest parents: the sun and the sea.”


            
            */}
                
        </Navbar>
            
    )
}

export default NavTop