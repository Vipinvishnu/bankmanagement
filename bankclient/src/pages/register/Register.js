import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { assets } from '../../assets/assets';
import { registerApi } from '../../Services/allApi';
import { useNavigate } from 'react-router-dom';

function Register() {

const navigate=useNavigate()
    
    const [user, setuser] = useState({
        userName: "", email: "", password: "", Accountnumber:""
    })
    const setInputs = (e) => {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
    }
    console.log(user);

    const handleRegister = async (e) => {
        e.preventDefault()
        const { userName, email, password, Accountnumber } = user
        if (!userName || !email || !password || !Accountnumber) {

            alert("please fill all datas")
        }
        else {
            const result = await registerApi(user)
            console.log(result);
            if (result.status === 200) {
                alert(`${result.data.userName} your account created successfully !`)
                navigate("/login")
                setuser({ userName: "", email: "", password: "", Accountnumber:""})
                
            }
            else {
                console.log(result.status);
                alert(result.response.data)

            }
        }
    }
    
  return (
    <Container>


                <Row>
                    <Col className='mt-5 text-center' >
                        <img style={{width:'50%'}}
                        src={assets.Logo} 
                        alt='Logo'
                        />
                        <div className="me-5 mt-3 ms-5 " id='box'>


                            <FloatingLabel className='mb-3 ' controlId="floatingInput" label="Enter Email"  >
                                <Form.Control value={user.email} onChange={(e) => setInputs(e)} name='email'
                                    style={{ background: "#F0EFFF" }} type="email" placeholder="name@example.com" />

                            </FloatingLabel>



                            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Enter UserName">
                                <Form.Control value={user.userName} onChange={(e) => setInputs(e)} name='userName'
                                    style={{ background: "#F0EFFF" }} type="text" placeholder="user name" />
                            </FloatingLabel>

                           


                            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
                                <Form.Control value={user.password} onChange={(e) => setInputs(e)} name='password'
                                    style={{ background: "#F0EFFF" }} type="password" placeholder="Password" />
                            </FloatingLabel>


                            <FloatingLabel className='mb-3' controlId="floatingPassword" label="Account Number">
                                <Form.Control value={user.Accountnumber} onChange={(e) => setInputs(e)} name='Accountnumber'
                                    style={{ background: "#F0EFFF" }} type="password" placeholder="Accountnumber" />
                            </FloatingLabel>



                            <div className="d-grid gap-2">
                                <Button  variant="primary" size="lg" style={{ background: "#4D47C3" }}onClick={(e) => handleRegister(e)} >
                                    Register
                                </Button>

                            </div>
                            
                        </div>

                    </Col>

                    <Col className='col2 ' >
                        <h1  style={{ marginTop: '50px' }}><strong>Sign Up to</strong></h1>
                        <p className='border '  style={{ fontWeight: '400', fontSize: '20px', marginTop: '20px' ,borderRadius:'20px'}}>Existing customers can register for online banking by following our quick and easy enrollment process. To begin, please complete the fields below to help us determine which accounts you should have access to once you log on to Online Banking.
                             Be sure to enter the information exactly as it appears in our records.</p>
                        <p style={{fontWeight:'700'}}>if you already have an account <br />
                            you can <a href="/Login" style={{ textDecoration: 'none', color: "#4D47C3" }}>Login Here !</a></p>


                        <img id='col2img' src={assets.Saly} alt="" />

                    </Col>

                </Row>
            </Container>
  )
}

export default Register