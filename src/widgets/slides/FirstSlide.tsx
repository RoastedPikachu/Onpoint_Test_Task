import React from "react";
import "./FirstSlide.css";

interface SlideProps {
  handleTouchStart: (event: any) => void;
  handleTouchEnd: (event: any) => void;
  handleClick: () => void;
  styles: Object;
}

const FirstSlide: React.FC<SlideProps> = ({
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
          src="/FirstAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__FirstAnimatedImage"
        />

        <img
          src="/SecondAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__SecondAnimatedImage"
        />

        <img
          src="/decorationImages/SpermDecorationImage.png"
          alt=""
          className="centerBlock__DecorationImage"
        />

        <img
          src="/ThirdAnimatedBacteriaImage.png"
          alt=""
          className="centerBlock__ThirdAnimatedImage"
        />

        <img
          src="/FourthAnimatedBacteriaImage.png"
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
