import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { assets } from '../../assets/assets';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                {/* <Navbar.Brand href="#"><strong style={{ marginLeft: '75px' }}>CBC BANK </strong> <br></br> commercial banking company</Navbar.Brand> */}
               <img style={{width:'25%'}}
               src={assets.Logo}
               alt='Logo'
               />             <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* <Nav.Link href="#action1">Personal</Nav.Link>
          <Nav.Link href="#action2">Bussiness</Nav.Link> */}
                        <NavDropdown title="Personal" style={{}} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="" >checking</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                saving
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Loans
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Credit Cards
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Bussiness" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="">checking</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                saving
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Loans
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Credit Cards
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Home Lending" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="">Mortgage</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Home  Equity Line  of Credit
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Construction Loans
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Investing" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="About Us" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="mx-auto d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        <div className='' style={{ marginLeft: '10px'}}>
                            <Button href='/login'>Login</Button>

                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>

  )
}

export default Header