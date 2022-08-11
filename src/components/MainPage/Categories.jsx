import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Indumentaria",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronica",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "accesorios",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Hogar y jardinería",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Regalos",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musica",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Salud y belleza",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Mascotas",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Juguetes",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Mercaderia",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Libros",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
