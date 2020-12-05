import React from "react";
import Header from "./Header";
import greyShirt from "../../images/t-shirt1.jpg";
import blackShirt from "../../images/t-shirt1.jpg";
import grayHoddie from "../../images/t-shirt2.jpg";
import blackHoddie from "../../images/t-shirt3.jpg";
// import blackShirt from "../../images/t-shirt4.jpg";
import Products from "./Products";
// import blackShirt from "../../images/t-shirt5.jpg";

const productInfo = [
  {
    id: "1",
    name: "Grey T-Shirt",
    price: "10",
    img: greyShirt,
  },
  {
    id: "2",
    name: "Black T-Shirt",
    price: "15",
    img: blackShirt,
  },
  {
    id: "3",
    name: "Gray Hoddie",
    price: "25",
    img: grayHoddie,
  },
  {
    id: "3",
    name: "Black Hoddie",
    price: "30",
    img: blackHoddie,
  },
];

const Home = () => {
  return (
    <div>
      <Header />


     <div className="row text-center container m-auto">
     {
          productInfo.map(shirt => <Products shirt={shirt} />)
      }
     </div>
    </div>
  );
};

export default Home;
