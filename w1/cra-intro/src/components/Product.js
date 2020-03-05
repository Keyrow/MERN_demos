import React, { useEffect, useState } from "react";
import FancyParagraph from "./FancyParagraph";

const Product = props => {
  const [product, setProduct] = useState(null);

  const className1 = "underline";
  const className2 = "red";

  useEffect(() => {
    setTimeout(() => {
      setProduct({
        name: "Bread Gloves",
        brand: "Leaven Life",
        imgUrl:
          "https://external-preview.redd.it/9Ibs6tuJH8lg_GPQ2iMzYbtVfMHomSKlsmXnkTt3E88.jpg?auto=webp&s=610bb7f652f17072f2d4ad15bf390f8095d29eb8"
      });
    }, 2000);
  }, []);

  if (product === null) {
    return (
      <div>
        <img
          height="500"
          src="https://media.giphy.com/media/w9yg6QsZJ3JC/giphy.gif"
          alt="Loading"
        />
      </div>
    );
  } else {
    return (
      <div>
        <FancyParagraph>Product: {product.name}</FancyParagraph>
        <h3>Brand: {product.brand}</h3>
        <img src={product.imgUrl} alt="Product" />
      </div>
    );
  }
};

export default Product;
