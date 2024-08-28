import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import "./Login.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { loginApi } from '../../Services/allApi';
import { useNavigate } from 'react-router-dom';




function Login() {
const navigate=useNavigate()
    const [userlogin, setUserlogin] = useState({
        Accountnumber: "",
        password: ""
      });
    
      const setInputs = (e) => {
        const { name, value } = e.target;
        setUserlogin({ ...userlogin, [name]: value });
      };
    
      const handleLogin = async (e) => {
        e.preventDefault();
        const {Accountnumber, password } = userlogin;
        if (!Accountnumber || !password) {
          alert("Please fill all fields");
        } else {
          try {
            const result = await loginApi(userlogin);
            console.log('API response:', result);
    
            if (result.status === 200) {
              console.log(result.data.user);
              sessionStorage.setItem("existinguser", JSON.stringify(result.data.user));
              sessionStorage.setItem("token", result.data.token);
              const username = result.data.user.userName || 'User';
    
              alert(`${username}, you have logged in successfully`);
              setUserlogin({ Accountnumber: "", password: "" });
              navigate("/dashboard")
            } else {
              alert(result.response.data);
            }
          } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again.");
          }
        }
      };
    return (
        <>
            <div>

                <div className='logo-container'>
                    {/* <img src={assets.logo} className='logo' alt="" /> */}
                    <h2 className='mt-3'>
                        <div className="d-flex justify-content-center gap-1">
                            <i
                                class="fa-solid fa-burger fa-xs fs-1 mt-3"
                                style={{ color: "#FE0C00" }}
                            ></i>
                            <div>
                                <img
                                    src={assets.Logo}
                                    alt='Logo'
                                />
                            </div>
                        </div>
                    </h2>
                </div>
                <div className='maindiv'>
                    <Container className='maincontainer'>
                        <Row>
                            <Col lg={6} >
                                <div className='border  mt-5' style={{borderRadius:'30px'}} >
                                    {/* <h1 className="fw-bold ms-3 heading">Log on</h1> */}
                                    <h5 className="mt-3 ms-2">Welcome to Commercial Banking Company's Online Banking! In order to keep your accounts and information safe, we have added additional layers of security to the login process. These security measures validate you as an authorized user and give you the peace of mind that you are logging into our official Online Banking site. 
                                        Please enter your Online Banking username.</h5>
                                    <p className="mt-3 ms-3 fs-5">
                                        If you don't have an account, you can{' '}
                                        <Button href='/register'
                                            style={{
                                                textDecoration: 'none',
                                                color: 'blue',
                                                background: 'none',
                                                border: 'none',
                                                padding: 0,
                                                cursor: 'pointer',
                                                
                                            }}
                                        >
                                            register here!
                                        </Button>
                                    </p>
                                    
                                </div>
                            </Col>
                            <Col lg={6}>
                           
                                <div className='shadow-lg text-center p-3 mt-5 logindiv'>
                                    <h2>Login Form</h2>
                                    <FloatingLabel  label="Account Number" className="mb-3 mt-5 ms-5 me-5">
                                        <Form.Control value={userlogin.Accountnumber} onChange={(e) => setInputs(e)}
                                            type="number"
                                            placeholder="name@example.com"
                                            name='Accountnumber'
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel  label="Password" className='mb-3 ms-5 me-5'>
                                        <Form.Control value={userlogin.password} onChange={(e) => setInputs(e)}
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                        />
                                    </FloatingLabel>
                                    <div className='text-center'>
                                        <Button  onClick={(e) => handleLogin(e)} className='logbtn mb-3' style={{ background: '#FE0C00', border: 'none' }} >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </>


    )

}

export default Login

