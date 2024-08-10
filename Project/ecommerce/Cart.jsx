import React, { useEffect, useState } from "react";
import { deleteCart, getCarts } from "../handleApi/handleCarts";
import { Link } from "react-router-dom";

const Cart = ({ user }) => {
  const [carts, setCarts] = useState([]);
  const fetchCarts = async () => {
    if (user && user._id) {
      try {
        const cartsData = await getCarts(user._id);
        setCarts(cartsData || []);
      } catch (error) {
        console.error("Error fetching carts:", error);
      }
    }
  };

  useEffect(() => {
    fetchCarts();
  }, [user]);

  const handleDelete = async(cartId) =>{
      await deleteCart(user._id,cartId);
      fetchCarts();
  } 

  return user && user._id ? (
    <div className="grid md:grid-cols-2 gap-2 ">
      {carts && carts.length > 0 ? (
        carts.map((item, index) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 max-h-[50vh] md:max-h-[90vh] m-2 flex flex-col">
            <div
              key={index}
              className=" flex"
            >
              <img className="w-[50%]" src={item.image} alt={item.title} />
              <div className="m-10">
                <h2>
                  <b>{item.title}</b>
                </h2>
                <p>{item.description}</p>
                <p>
                  <b>₹ {item.price}</b>
                </p>
              </div>
            </div> 
            <div className="flex justify-end pr-5 pb-5"><button className="bg-[#d35532] p-2 rounded text-white" onClick={()=>handleDelete(item._id)}>Remove</button></div>
          </div>
        ))
      ) : (
        <div className="m-2 p-4 bg-white rounded-lg shadow-lg ring-2 ring-opacity-40">
          <p>No cart items</p>
        </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center items-center h-[80vh]">
      <h2>
        Login to the website{" "}
        <Link to="/login" className="text-blue-500 underline">
          Go to
        </Link>{" "}
      </h2>
    </div>
  );
};

export default Cart;
