import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/apple.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/samsung.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/motorola.png",
      cateName: "Motorola",
    },
    {
      cateImg: "./images/category/huawei.png",
      cateName: "Huawei",
    },
    {
      cateImg: "./images/category/xiaomi.png",
      cateName: "Xiaomi",
    },
    {
      cateImg: "./images/category/sony.png",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex ">
          <h1>Marcas</h1>
          <h1>Tiendas</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box3">
          <button>Ver todas las marcas</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
