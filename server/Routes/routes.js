const express = require('express');
const router = express.Router();


const Userlogic=require('../Controllers/Userlogic');
const jwtMiddleware = require('../MiddleWare/jwtMiddleware');

//signup
router.post("/user/register",Userlogic.register)
//login
router.post("/user/login",Userlogic.login)
//admin
router.post("/admin",jwtMiddleware,Userlogic.dummyAPI)

module.exports = router;
