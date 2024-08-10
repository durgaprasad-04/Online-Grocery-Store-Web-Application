const {Router} = require('express');

const bcrypt = require("bcrypt");

const router =Router()

const jwt = require("jsonwebtoken");

const {User,Loginvalidate,generateAuthToken} = require("../Models/user")

router.post("/login", async(req,res)=>{
    try{          
        const {error} = Loginvalidate(req.body);
        if(error)
            return res.send({message:error.details[0].message})

        const user = await User.findOne({email:req.body.email})
        if(!user)
            return res.send({message:"Invalid Email or password"})

        const validPassword = await bcrypt.compare(req.body.password,user.password)
        if(!validPassword)
            return res.send({message:"Invalid Email or password"})

        const token = generateAuthToken(user)
        res.send({status:true,message:"Logged in successfully",token:token})

    }

    catch(err)
    {
        res.send({message:"Internal server error"})
    }

})

module.exports = router;