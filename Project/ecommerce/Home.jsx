import React, { useState } from "react";

import ProductCards from "../cards/productCards";
import Search from "./Search";

import devicesData from "../products/devices.json"

const Home = ({ user, setUser }) => {
  const [devices] = useState(devicesData);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredDevices = Object.values(devices).filter((device) =>
    device.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mt-3 mx-1">
        {filteredDevices.map((device, index) => (
          <ProductCards
            key={index}
            pId={'p'+index}
            title = {device.title}
            image={device.image}
            price={device.price}
            description={device.description}
          />
        ))}
      </div>
      {/* <div>
        <View/>
      </div> */}
    </div>
  );
};

export default Home;
