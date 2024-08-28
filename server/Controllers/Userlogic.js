const users = require("../Model/userModel");
const jwt=require("jsonwebtoken")

exports.register = async(req,res)=>{
    const { userName, email, password,Accountnumber } = req.body;

    try {
        const existinguser = await users.findOne({ Accountnumber });
        if (existinguser) {
          res.status(400).json("already exist");
        } else {
          const newUser = new users({
            userName,
            email,
            password,
            Accountnumber
          });
          //store the new object in mongodb collection
          await newUser.save();
          res.status(200).json(newUser);
        }
      } catch (err) {
        res.status(401).json(`register Api failed ${err}`);
      }
    };


    exports.login = async (req, res) => {
        const { Accountnumber, password } = req.body;
      
        try {
          const existUser = await users.findOne({ Accountnumber, password });
          if (existUser) {
            //login success-token generate
            const token = jwt.sign({ _id: existUser._id }, "supersecretkey123");
            console.log(token);
      
            res.status(200).json({
              user: existUser,
              token
            });
          } else {
            res.status(404).json("Incorrect Account number or password ");
          }
        } catch (err) {
          res.status(401).json(`login api failed ${err}`);
        }
      };
      

      
exports.dummyAPI = async (req, res) => {
    try {
      res.status(200).json({ userId: req.payload, message: "Admin accessed!!" });
    } catch (err) {
      res.status(401).json(err);
    }
  };