const User = require("../model/User.model");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

//create user
const createUser = async (req, res) => {

    //const salt = bcrypt.genSaltSync(10);
    //const hash = bcrypt.hashSync(req.body.password, salt);

    console.log(`<-- ${req.method} Request`);
    //const user = new User(req.body);
    const user = new User({

        userid:req.body.userId,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        position:req.body.position,
        passwordstatus:"Defult"
    });

    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.position);

    

    User.create(user).then(() => {
        res.json("User Registered")
        console.log(`--> ${req.method} Response`);
    }).catch((error) => {
        console.log(`${error.message}`)
    })
}

//update user
const updateUser = (req,res)=>{

    

    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;
    console.log(req.params.id);


    User.findOneAndUpdate(id,req.body).then(() => {
        res.json("User Updated")
        console.log(`--> ${req.method} Response`);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//delete user
const deleteUser = (req,res)=>{

    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;
    
    console.log(req)

    User.findOneAndDelete({ "userid" : id }).then(() => {
        res.json("User deleted")
        console.log(`--> ${req.method} Response`);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//get all the users
const readAllUsers = (req,res)=>{
        console.log(`<-- ${req.method} Request`);

        User.find().then((users)=>{
            console.log(`--> ${req.method} Response`);
            res.json(users);
        }).catch((error)=>{
            console.log(`${error.message}`)
        })
}

//get a user
const getUser = (req,res)=> {
    console.log(`<-- ${req.method} Request`);
    const id = req.params.id;

    User.find({userid:id}).then((user)=>{
        console.log(`--> ${req.method} Response`);
        res.json(user);
    }).catch((error)=>{
        console.log(`${error.message}`)
    })
}

//Login
const login = async (req,res) =>{

    try {
        const user = await User.findOne({email:req.body.email});
        if(!user) {
            return res.status(401).json("Email not found")
        }

        const isPassword = await bcrypt.compare(req.body.password,user.password);
        if(!isPassword) {
            return res.status(401).json("Email and password mismatched")
        }

        const token = jwt.sign(
            {id:user._id, position:user.position, pstatus:user.passwordstatus},
            process.env.JWT,
            { expiresIn: 60 * 15 } //Adjust the token expiration duration

        )

        const {password,...otherDetails} = user._doc;
        console.log(token);
        //const otherDetails = user._doc;
        res
            // .cookie("access_token",token,{
            //     httpOnly:true
            // })
            // .status(200)
            // .json({...otherDetails})
            .json({token})

    } catch (err) {
        res.status(500).json(err.message);
    }
}

module.exports = {createUser,updateUser,deleteUser,readAllUsers,getUser,login}