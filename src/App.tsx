import { useState } from "react";

import FirstSlide from "./widgets/slides/FirstSlide";
import SecondSlide from "./widgets/slides/SecondSlide";
import ThirdSlide from "./widgets/slides/ThirdSlide";

import "./App.css";

function App() {
  const [targetSlideId, setTargetSlideId] = useState(0);

  const [slidesStyles, setSlidesStyles] = useState([0, 1024, 2048]);

  const [firstTouchCoordinates, setFTC] = useState(0);
  const [lastTouchCoordinates, setLTC] = useState(0);

  const setStartTouch = (event: TouchEvent) => {
    setFTC(event.changedTouches[0].pageX);
  };

  const setLastTouch = (event: TouchEvent) => {
    changePhotoByTouch(event, getNextSlide, getPreviousSlide);
  };

  const getNextSlide = () => {
    if (targetSlideId !== 2) {
      setTargetSlideId(targetSlideId + 1);
      setSlidesStyles(slidesStyles.map((style) => style - 1024));
    }
  };

  const getPreviousSlide = () => {
    if (targetSlideId !== 0) {
      setTargetSlideId(targetSlideId - 1);
      setSlidesStyles(slidesStyles.map((style) => style + 1024));
    }
  };

  const goToFirstSlide = () => {
    setTargetSlideId(0);
    setSlidesStyles([0, 1024, 2048]);
  };

  const changePhotoByTouch = (
    event: any,
    getNext: () => void,
    getPrevious: () => void,
  ) => {
    setLTC(event.changedTouches[0].pageX);

    let isClosestHasScroll = event.target.closest(
      ".secondSlide__MessageWrapper",
    );

    if (!isClosestHasScroll && firstTouchCoordinates < lastTouchCoordinates) {
      getPrevious();
    } else if (
      !isClosestHasScroll &&
      firstTouchCoordinates > lastTouchCoordinates
    ) {
      getNext();
    }
  };

  return (
    <>
      <section className="slideWrapper">
        <div className="topBlock">
          <button onClick={() => goToFirstSlide()} className="topBlock__Button">
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

        <FirstSlide
          styles={{
            position: "absolute",
            left: slidesStyles[0] + "px",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            transition: "800ms ease",
          }}
          handleTouchStart={setStartTouch}
          handleTouchEnd={setLastTouch}
          handleClick={getNextSlide}
        />

        <SecondSlide
          targetSlideId={targetSlideId}
          styles={{
            position: "absolute",
            left: slidesStyles[1] + "px",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            transition: "800ms ease",
          }}
          handleTouchStart={setStartTouch}
          handleTouchEnd={setLastTouch}
        />

        <ThirdSlide
          styles={{
            position: "absolute",
            left: slidesStyles[2] + "px",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            transition: "800ms ease",
          }}
          handleTouchStart={setStartTouch}
          handleTouchEnd={setLastTouch}
        />

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
