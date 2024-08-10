const {Router} = require('express');

const bcrypt = require("bcrypt");

const router = Router();

const {User,validate} = require("../Models/user")

router.post("/register",async(req,res)=>{
    try{
        const {error} = validate(req.body);
        if(error)
            return res.send({message:error.details[0].message})
        const user = await User.findOne({email:req.body.email})
        if(user)
            return res.send({message:"User with email already exist"})
        const salt =await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password,salt)
        await new User({...req.body,password:hashPassword}).save()
        res.send({message:"User successfully registered"})
    }
    catch(err)
    {
        res.send({message:"Internal server error"})
    }
})


module.exports = router;    