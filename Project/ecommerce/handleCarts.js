import axios from "axios"

const URL = "http://localhost:5000";

const addCart = async(title,image,price,description,userId) =>{
    try{
        const response = await axios.post(`${URL}/cart/add/${userId}`,{title,image,price,description});
        // return response.data;
        alert(response.data.message);
    }
    catch(err){
        console.log(err);
    }
}

const getCarts = async(userId)=>{
    try{
        const response = await axios.get(`${URL}/cart/${userId}`);
        return response.data;
    }
    catch(err)
    {
        console.log(err);
    }
}

const deleteCart = async (userId,cartId) => {
    try {
      const response = await axios
        .delete(`${URL}/cart/delete/${userId}/${cartId}`)
        .then(({ data }) => {
          console.log(data);
        //   alert(data.message)
        });        
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

export {getCarts,addCart,deleteCart};