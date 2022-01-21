import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Modal from 'react-bootstrap/Modal'


import { useNavigate } from 'react-router-dom'



function NavTop(props) {

    const [show, setShow] = useState(false)

    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    
    const navigate = useNavigate()

    const linkClick = (where) => {
        navigate(where)
    }



    return (
        <div>
            <Navbar className='d-flex justify-content-between px-3 py-1 border-bottom' >
            
                <Navbar.Brand onClick={() => linkClick('/')} className='p-0 ms-2 m-0'>hh</Navbar.Brand>
                
                <p className='fst-italic fw-lighter m-0 d-none d-sm-block'>it is difficult to walk at one and the same time many paths of life</p>
                
                <div className='d-flex align-items-center m-0 me-2'>
                    <a href='/' className='fs-4 m-0' style={{ color: 'black'}}><i className='bi bi-person px-2'></i></a>
                    <a href='/' className='fs-4 m-0' style={{ color: 'black'}}><i className='bi bi-bag px-3'></i></a>
                    <i className='bi bi-list d-sm-none fs-1 m-0' onClick={handleOpen}></i>
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
                <Modal
                    show={show}
                    fullscreen
                    style={{ opacity: '.9'}}
                    >
                    <Modal.Header className='d-flex flex-row-reverse py-2 px-4'><i onClick={handleClose}class='fs-4 bi bi-x-lg m-0'></i></Modal.Header>
                    <Modal.Body className='d-flex'>
                        <div className='col-5'>
                            <p className='fs-4'>Items</p>
                            <p>tops</p>
                            <p>bottoms</p>
                            <p>dresses</p>
                            <p>hats and hankies</p>
                        </div>
                        <div className='col-5'>
                            <p className='fs-4'>Categories</p>
                            <p>Babies</p>
                            <p>Women</p>
                            <p>Men</p>
                        </div>
                    </Modal.Body>    
                </Modal>
        </div>
            
    )
}

export default NavTop