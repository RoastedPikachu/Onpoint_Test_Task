import React from "react";
import "./FirstSlide.css";

const FirstSlide = () => {
  return (
    <div className="slideWrapper__FirstSlide">
      <div className="centerBlock">
        <h3 className="centerBlock__SmallHeading">ПРИВЕТ, </h3>

        <h1 className="centerBlock__MainHeading">
          ЭТО <strong>НЕ</strong> <br /> КОММЕРЧЕСКОЕ <br /> ЗАДАНИЕ
        </h1>

        <img
          src="/SpermDecorationImage.png"
          alt=""
          className="centerBlock__DecorationImage"
        />

        <button className="centerBlock__Button"></button>
      </div>
    </div>
  );
};

export default FirstSlide;
