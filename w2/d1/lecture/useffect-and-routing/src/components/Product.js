import React, { useEffect, useState } from "react";

const Product = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("use effect");
    setTimeout(() => {
      setProduct({
        name: "Bread Gloves",
        brand: "Leaven Life",
        imgUrl:
          "https://external-preview.redd.it/9Ibs6tuJH8lg_GPQ2iMzYbtVfMHomSKlsmXnkTt3E88.jpg?auto=webp&s=610bb7f652f17072f2d4ad15bf390f8095d29eb8",
        waowCount: 0,
      });
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("product state updated");
  }, [product]);

  const sayWaow = (event) => {
    // two lines, easier technique
    const productCopy = { ...product };
    productCopy.waowCount++;

    // one line technique, copy all existing key value pairs, but overwrite waowCount
    // const productCopy = { ...product, waowCount: product.waowCount + 1 };

    // won't update if passed the same object, even if you change something in the object
    setProduct(productCopy);
  };

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
  }

  return (
    <div>
      <h2>Product: {product.name}</h2>
      <h3>Brand: {product.brand}</h3>
      <img src={product.imgUrl} alt="Product" />
      <button onClick={sayWaow}>Say WAOW</button>
      <p>{"WAOW ".repeat(product.waowCount)}</p>
    </div>
  );
};

export default Product;
