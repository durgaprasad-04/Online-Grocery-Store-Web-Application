import axios from "axios";
import {jwtDecode} from 'jwt-decode'
import Cookie from 'js-cookie';


const baseUrl = "http://localhost:5000";



const signUp = async (userName, userEmail, userPassword) => {
  try {
    await axios
      .post(`${baseUrl}/register`, {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then((res) => alert(res.data.message));
  } catch (err) {
    console.log("Error while registering.....");
  }
};

const signIn = async (userEmail, userPassword, setUser, navigate) => {
  try {
    if(userEmail&&userPassword)
    await axios
      .post(`${baseUrl}/login`, {
        email: userEmail,
        password: userPassword,
      })
      .then(
        (res) => {
        alert(res.data.message);
        if(res.data.status)
          Cookie.set('token', res.data.token,{expires:1});  
        const tokenObj = jwtDecode(res.data.token);
        setUser(tokenObj);
        navigate("/");
      });
  } catch (err) {
    console.log("Error while login........");
  }
};


const forgotPassword = async (userEmail, userPassword) => {
  try {
    await axios
      .put(`${baseUrl}/forgotpassword`, {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        alert(res.data.message);
      });
  } catch (err) {
    console.log("Error while login........");
  }
};

export { signUp, signIn,forgotPassword };
