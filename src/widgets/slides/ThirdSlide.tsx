import React, { useState } from "react";
import "./ThirdSlide.css";

interface ModalSlide {
  id: number;
  isActive: boolean;
}

interface Advance {
  id: number;
  text: string;
}

interface SlideProps {
  handleTouchStart: (event: any) => void;
  handleTouchEnd: (event: any) => void;
  styles: Object;
}

const ThirdSlide: React.FC<SlideProps> = ({
  handleTouchStart,
  handleTouchEnd,
  styles,
}) => {
  const [isModalWindowActive, setIsModalWindowActive] = useState(false);

  const [startAdvancesIndex, setStartAdvancesIndex] = useState(0);

  const [modalSlides, setModalSlides] = useState([
    {
      id: 1,
      isActive: true,
    },
    {
      id: 2,
      isActive: false,
    },
  ] as ModalSlide[]);
  const [advances, _setAdvances] = useState([
    {
      id: 1,
      text: "orci porta non pulvinar neque laoreet suspendisse",
    },
    {
      id: 2,
      text: "ornare quam viverra orci sagittis",
    },
    {
      id: 3,
      text: "orci porta non pulvinar neque laoreet suspendisse",
    },
    {
      id: 4,
      text: "ornare quam viverra orci sagittis",
    },
    {
      id: 5,
      text: "orci porta non pulvinar neque laoreet suspendisse",
    },
  ] as Advance[]);

  const handleTouchStartEvent = (event: any) => {
    handleTouchStart(event);
  };

  const handleTouchEndEvent = (event: any) => {
    handleTouchEnd(event);
  };

  const changeModalWindowActive = () => {
    setIsModalWindowActive(!isModalWindowActive);
  };

  const getPreviousModalSlide = () => {
    const targetIndex = modalSlides.find(
      (slide: ModalSlide) => slide.isActive,
    )!.id;

    if (targetIndex !== 1) {
      setStartAdvancesIndex(3 * (targetIndex - 2));
      setModalSlides(
        modalSlides.map((slide: ModalSlide) => ({
          ...slide,
          isActive: slide.id === targetIndex - 1,
        })),
      );
    }
  };

  const getNextModalSlide = () => {
    const targetIndex = modalSlides.find(
      (slide: ModalSlide) => slide.isActive,
    )!.id;

    if (targetIndex !== modalSlides.length) {
      setStartAdvancesIndex(3 * targetIndex);
      setModalSlides(
        modalSlides.map((slide: ModalSlide) => ({
          ...slide,
          isActive: slide.id === targetIndex + 1,
        })),
      );
    }
  };

  const changeSlide = (id: number) => {
    setStartAdvancesIndex(3 * (id - 1));
    setModalSlides(
      modalSlides.map((slide: ModalSlide) => ({ ...slide, isActive: false })),
    );
    setModalSlides(
      modalSlides.map((slide: ModalSlide) => ({
        ...slide,
        isActive: slide.id === id,
      })),
    );
  };

  return (
    <div
      onTouchStart={(event: any) => handleTouchStartEvent(event)}
      onTouchEnd={(event: any) => handleTouchEndEvent(event)}
      className="slideWrapper__thirdSlide"
      style={styles}
    >
      <img
        src="/decorationImages/SprayDecorationImage.png"
        alt=""
        className="thirdSlide__DecorationImage"
      />

      <p className="thirdSlide__KeyMessage">КЛЮЧЕВОЕ СООБЩЕНИЕ</p>

      <h2 className="thirdSlide__Brend">
        BREND<strong>XY</strong>
      </h2>

      <div
        className={`thirdSlide__AdvancesModal ${
          isModalWindowActive ? "thirdSlide__AdvancesModalActive" : ""
        }`}
      >
        {isModalWindowActive && (
          <>
            <p className="thirdSlide__AdvancesModal__KeyMessage">
              ПРЕИМУЩЕСТВА
            </p>

            <h2 className="thirdSlide__AdvancesModal__Brend">
              BREND<strong>XY</strong>
            </h2>

            <div className="thirdSlide__AdvancesModal__AdvancesTextWrapper">
              {advances
                .slice(startAdvancesIndex, startAdvancesIndex + 3)
                .map((advance: Advance) => (
                  <span key={advance.id}>
                    <h4>{advance.id < 10 ? `0${advance.id}` : advance.id}</h4>

                    <p>{advance.text}</p>
                  </span>
                ))}
            </div>

            <div className="thirdSlide__AdvancesModal__Controls">
              <button
                onClick={() => getPreviousModalSlide()}
                className="thirdSlide__AdvancesModal__ControlsArrows"
              >
                <img src="/icon/LeftArrowIcon.svg" alt="Предыдущий слайд" />
              </button>

              {modalSlides.map((slide: ModalSlide) => (
                <button
                  key={slide.id}
                  onClick={() => changeSlide(slide.id)}
                  className={
                    slide.isActive
                      ? "thirdSlide__AdvancesModal__Controls__slideButtonActive"
                      : "thirdSlide__AdvancesModal__Controls__slideButton"
                  }
                ></button>
              ))}

              <button
                onClick={() => getNextModalSlide()}
                className="thirdSlide__AdvancesModal__ControlsArrows"
              >
                <img src="/icon/RightArrowIcon.svg" alt="Следующий слайд" />
              </button>
            </div>

            <button
              onClick={() => changeModalWindowActive()}
              className="advancesModal__Close"
            >
              <img src="/icon/XmarkIcon.svg" alt="Закрыть модальное окно" />
            </button>
          </>
        )}
      </div>

      {isModalWindowActive && <div className="darkBackground"></div>}

      <div className="thirdSlide__Advances">
        <div className="thirdSlide__Advances__Dishes">
          <img src="/icon/DishesIcon.svg" alt="Иконка: Тарелки" />

          <p>
            a condimentum vitae sapien pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac
          </p>
        </div>

        <div className="thirdSLide__Advances__RightBlock">
          <div className="thirdSlide__Advances__RightBlock__Time">
            <img src="/icon/CalendarIcon.svg" alt="Иконка: Календарь" />

            <p>Eget egestas purus viverra</p>
          </div>

          <button
            onClick={() => changeModalWindowActive()}
            className="thirdSlide__Advances__RightBlock__MoreButton"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSlide;
