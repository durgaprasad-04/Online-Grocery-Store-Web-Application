import React from 'react';

// import {useNavigate} from 'react-router-dom'

const ProductCards = ({pId,title,image,price,description}) => {

  // const navigate = useNavigate();

  const handleCard = () =>{
    window.open(`/${pId}`,'_blank');
  }

  return (
    <div  id="card" className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 max-h-[100vh] hover:cursor-pointer " onClick={handleCard}>
      <div className="relative">
        <img
          className="w-full"
          src={image}
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        {/* <p className="text-gray-600 text-sm mb-4 ">
          {description}
        </p> */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">₹ {price} </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
