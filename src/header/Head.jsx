import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +54 1234-5678</label>
            <i className="fa fa-envelope"></i>
            <label> support@reactecommerce.com</label>
          </div>
          <div className="right row RText">
            <label>Sugerencias</label>
            <label>Argentina</label>
            <label>EN</label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
