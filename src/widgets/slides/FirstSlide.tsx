import React from "react";
import { SlideProps } from "../../interfaces";

import "./FirstSlide.css";

interface FirstSlideProps extends SlideProps {
  handleClick: () => void;
}

const FirstSlide: React.FC<FirstSlideProps> = ({
  handleTouchStart,
  handleTouchEnd,
  handleClick,
  styles,
}) => {
  const handleTouchStartEvent = (event: any) => {
    handleTouchStart(event);
  };

  const handleTouchEndEvent = (event: any) => {
    handleTouchEnd(event);
  };

  const handleClickEvent = () => {
    handleClick();
  };

  return (
    <div
      onTouchStart={(event: any) => handleTouchStartEvent(event)}
      onTouchEnd={(event: any) => handleTouchEndEvent(event)}
      className="slideWrapper__FirstSlide"
      style={styles}
    >
      <div className="centerBlock">
        <h3 className="centerBlock__SmallHeading">ПРИВЕТ, </h3>

        <h1 className="centerBlock__MainHeading">
          ЭТО <strong>НЕ</strong> <br /> КОММЕРЧЕСКОЕ <br /> ЗАДАНИЕ
        </h1>

        <img
          src="/decorationImages/FirstAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__FirstAnimatedImage"
        />

        <img
          src="/decorationImages/SecondAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__SecondAnimatedImage"
        />

        <img
          src="/decorationImages/SpermDecorationImage.png"
          alt=""
          className="centerBlock__DecorationImage"
        />

        <img
          src="/decorationImages/ThirdAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__ThirdAnimatedImage"
        />

        <img
          src="/decorationImages/FourthAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__FourthAnimatedImage"
        />

        <button
          onClick={() => handleClickEvent()}
          className="centerBlock__Button"
        ></button>
      </div>
    </div>
  );
};

export default FirstSlide;
