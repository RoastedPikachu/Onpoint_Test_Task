import React, { useState } from "react";

import FirstSlide from "./widgets/slides/FirstSlide";
import SecondSlide from "./widgets/slides/SecondSlide";
import ThirdSlide from "./widgets/slides/ThirdSlide";

import "./App.css";

function App() {
  return (
    <>
      <section className="slideWrapper">
        <div className="topBlock">
          <button className="topBlock__Button">
            <img
              src="/icon/HomeIcon.svg"
              alt="Иконка: вернуться на первый слайд"
              className="topBlock__Button__Icon"
            />
          </button>

          <div className="topBlock__TextWrapper">
            <p className="topBlock__TextWrapper__Text">PROJECT</p>
          </div>
        </div>

        {/*<FirstSlide/>*/}

        {/*<SecondSlide/>*/}

        <ThirdSlide />

        <img
          src="/logo/OnpointLogo.svg"
          alt="Логотип Onpoint"
          className="logo"
        />
      </section>
    </>
  );
}

export default App;
