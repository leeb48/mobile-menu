import React, { useState } from "react";

import menuAxios from "../../config/menuAxios";

const MenuForm = () => {
  const [foodData, setFoodData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
  });
  const [foodImg, setFoodImg] = useState<any>();

  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    setFoodData({ ...foodData, [e.currentTarget.name]: e.currentTarget.value });

  const fileChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      setFoodImg(file);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    if (foodImg) {
      formData.append("img", foodImg, foodImg.name);
    }
    formData.append("data", JSON.stringify(foodData));

    const res = await menuAxios.post("/menu/create-food-item", formData);

    console.log(res);
  };

  const { name, category, description, price } = foodData;

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="food name"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={onChange}
          placeholder="food price"
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="food description"
        />
        <input
          type="text"
          name="category"
          value={category}
          onChange={onChange}
          placeholder="food category"
        />
        <input type="file" name="image" onChange={fileChangeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MenuForm;
