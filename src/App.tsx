import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="firstSlide">
        <div className="topBlock">
          <button className="topBlock__Button">
            <img
              src="/HomeIcon.svg"
              alt="Иконка: вернуться на первый слайд"
              className="topBlock__Button__Icon"
            />
          </button>

          <div className="topBlock__TextWrapper">
            <p className="topBlock__TextWrapper__Text">PROJECT</p>
          </div>
        </div>

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

        <img src="/OnpointLogo.svg" alt="Логотип Onpoint" className="logo" />
      </section>
    </>
  );
}

export default App;
