const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");
const Joi = require("joi");

const cartSchema = new mongoose.Schema({
  title:{
    type:String,
  },
  image:{
    type:String
  },
  price:{
    type:String,
  },
  description:{
    type:String,
  }
})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  carts:[cartSchema]
});

const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
};

const generateAuthToken =  (user) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1h",
  });
  return token;
};

const User = mongoose.model("user", userSchema);


const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().max(50).min(3).required().label("Name"),
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({'string.pattern.base':`"Email" must be a valid email address`}).label("Email"),
    password: passwordComplexity(complexityOptions).required().label("Password")
  });
  return schema.validate(data);
};

const Loginvalidate = (data) =>{
    const schema = Joi.object({
      email: Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({'string.pattern.base':`"Email" must be a valid email address`}).label("Email"),
      password: passwordComplexity(complexityOptions).required().label("Password")
      });
    return schema.validate(data);
}

const forgotvalidate = (data)=>{
  const schema = Joi.object({
    email: Joi.string().regex(/^[a-zA-Z0-9._-]+[0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({'string.pattern.base':`"Email" must be a valid email address`}).label("Email"),
    password: passwordComplexity(complexityOptions).required().label("Password")
    });
    return schema.validate(data);
}

module.exports={User,validate,Loginvalidate,forgotvalidate,generateAuthToken}
