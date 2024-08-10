import React, { useState } from "react";
import { useParams } from "react-router-dom";
import devicesData from "../products/devices.json"
import { addCart } from "../handleApi/handleCarts";

const View = ({user}) => {
    const { pId } = useParams();

    const [devices] = useState(devicesData);


    const handleCart =(title,image,price,description) =>{
        user && user._id ? addCart(title,image,price,description,user._id) : alert("Please login to add to cart");
    }
    const handleBuy = async (title, image, price, description) => {
      if (user && user._id) {
        try {
          const response = await fetch('/api/buy', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title,
              image,
              price,
              description,
              userId: user._id
            })
          });
  
          if (!response.ok) {
            throw new Error('Purchase failed');
          }
  
          const result = await response.json();
          alert(result.message);
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("Please log in to make a purchase.");
      }
    };
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 m-10 flex justify-center">
          <img 
            className="h-[320px]"
            src={devices[pId].image}
            alt="Product"
          />
        </div>
        <div className="m-10 flex flex-col justify-around">
          <div>{devices[pId].title}</div>
          <div>₹ {devices[pId].price}</div>
          <div>{devices[pId].description}</div>
          <div className="flex justify-around gap-5">
            <button  id="additem"className="bg-[#f3dd39] p-2 rounded hover:bg-[#b3a750bd] w-[50%]" onClick={()=>handleCart(devices[pId].title,devices[pId].image,devices[pId].price,devices[pId].description)}>Add to Cart</button>
            <button
        className="bg-[#14b8a6] p-2 rounded hover:bg-[#80b350bd] w-[50%]"
        onClick={() => handleBuy(devices[pId].title, devices[pId].image, devices[pId].price, devices[pId].description)}
      >
        Buy
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
