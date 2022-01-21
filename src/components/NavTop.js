import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
            <Navbar className='d-flex justify-content-between px-3 py-3 border-bottom' >
            
                <Navbar.Brand onClick={() => linkClick('/')} className='p-0 ms-4 m-0'>hh</Navbar.Brand>
                
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
                    onHide={handleClose}
                    fullscreen
                    style={{ opacity: '.85'}}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    
                </Modal>

        </div>
            
    )
}

export default NavTop