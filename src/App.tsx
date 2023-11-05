import React, { useState } from "react";
import "./App.css";

interface ModalSlide {
  id: number;
  isActive: boolean;
}

interface Advance {
  id: number;
  text: string;
}

function App() {
  const [isModalWindowActive, setIsModalWindowActive] = useState(false);

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
  const [advances, setAdvances] = useState([
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

  const changeModalWindowActive = () => {
    setIsModalWindowActive(!isModalWindowActive);
  };

  const changeSlide = (id: number) => {
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
    <>
      <section className="slideWrapper">
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

        {/*<div className="slideWrapper__FirstSlide">*/}
        {/*  <div className="centerBlock">*/}
        {/*    <h3 className="centerBlock__SmallHeading">ПРИВЕТ, </h3>*/}

        {/*    <h1 className="centerBlock__MainHeading">*/}
        {/*      ЭТО <strong>НЕ</strong> <br /> КОММЕРЧЕСКОЕ <br /> ЗАДАНИЕ*/}
        {/*    </h1>*/}

        {/*    <img*/}
        {/*      src="/SpermDecorationImage.png"*/}
        {/*      alt=""*/}
        {/*      className="centerBlock__DecorationImage"*/}
        {/*    />*/}

        {/*    <button className="centerBlock__Button"></button>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="slideWrapper__SecondSlide">*/}
        {/*  <h2 className="secondSlide__MessageHeading">*/}
        {/*    текст <br /> сообщения*/}
        {/*  </h2>*/}

        {/*  <div className="secondSlide__MessageWrapper">*/}
        {/*    <div className="secondSlide__MessageWrapper__Message">*/}
        {/*      <p className="secondSlide__MessageWrapper__MessageText">*/}
        {/*        <strong>Lorem ipsum dolor sit amet</strong>, consectetur*/}
        {/*        adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
        {/*        dolore magna aliqua. Egestas erat imperdiet sed euismod nisi*/}
        {/*        porta lorem mollis. Risus feugiat in ante metus. Amet nisl*/}
        {/*        suscipit adipiscing bibendum. Nunc lobortis mattis aliquam*/}
        {/*        faucibus purus in massa. Cursus metus aliquam eleifend mi in*/}
        {/*        nulla posuere sollicitudin. Malesuada bibendum arcu vitae*/}
        {/*        elementum curabitur. Nunc consequat interdum varius sit.*/}
        {/*        Pellentesque diam volutpat commodo sed egestas. Platea dictumst*/}
        {/*        quisque sagittis purus sit amet. Sed velit dignissim sodales ut*/}
        {/*        eu sem. Tellus mauris a diam maecenas sed enim ut sem. Tellus*/}
        {/*        orci ac auctor augue mauris. Massa id neque aliquam vestibulum*/}
        {/*        morbi blandit cursus. Amet cursus sit amet dictum sit amet*/}
        {/*        justo. Sagittis purus sit amet volutpat consequat mauris nunc*/}
        {/*        congue. Quis hendrerit dolor magna eget est. Pellentesque massa*/}
        {/*        placerat duis ultricies lacus sed turpis tincidunt id. Blandit*/}
        {/*        cursus risus at ultrices mi tempus imperdiet nulla. Sit amet est*/}
        {/*        placerat in egestas erat imperdiet. Et netus et malesuada fames.*/}
        {/*        Quam adipiscing vitae proin sagittis nisl rhoncus mattis*/}
        {/*        rhoncus. Imperdiet proin fermentum leo vel. Scelerisque eu*/}
        {/*        ultrices vitae auctor eu augue ut. Consectetur adipiscing elit*/}
        {/*        pellentesque habitant morbi tristique senectus et netus. Sit*/}
        {/*        amet nisl purus in mollis nunc sed id semper. At auctor urna*/}
        {/*        nunc id. Sed viverra ipsum nunc aliquet bibendum. Scelerisque eu*/}
        {/*        ultrices vitae auctor eu. Dolor purus non enim praesent*/}
        {/*        elementum facilisis. Ut sem viverra aliquet eget sit amet.*/}
        {/*        Ultrices neque ornare aenean euismod elementum nisi quis*/}
        {/*        eleifend quam. Nam aliquam sem et tortor consequat id porta nibh*/}
        {/*        venenatis. Cursus metus aliquam eleifend mi in. Ullamcorper eget*/}
        {/*        nulla facilisi etiam. Placerat vestibulum lectus mauris ultrices*/}
        {/*        eros in cursus. Leo in vitae turpis massa. Viverra justo nec*/}
        {/*        ultrices dui sapien. Fames ac turpis egestas maecenas pharetra*/}
        {/*        convallis posuere morbi leo. Eu consequat ac felis donec et odio*/}
        {/*        pellentesque diam volutpat. Dolor purus non enim praesent*/}
        {/*        elementum. Mauris commodo quis imperdiet massa tincidunt nunc*/}
        {/*        pulvinar. Mauris ultrices eros in cursus turpis massa tincidunt*/}
        {/*        dui ut. Auctor eu augue ut lectus arcu. Porta non pulvinar neque*/}
        {/*        laoreet suspendisse. Auctor urna nunc id cursus. Imperdiet massa*/}
        {/*        tincidunt nunc pulvinar sapien et ligula ullamcorper. Non odio*/}
        {/*        euismod lacinia at quis. Quam nulla porttitor massa id neque*/}
        {/*        aliquam vestibulum morbi blandit. Tellus molestie nunc non*/}
        {/*        blandit massa enim nec dui. Interdum consectetur libero id*/}
        {/*        faucibus nisl tincidunt eget nullam non. Consequat nisl vel*/}
        {/*        pretium lectus quam. Urna condimentum mattis pellentesque id*/}
        {/*        nibh. Sem viverra aliquet eget sit. Metus aliquam eleifend mi in*/}
        {/*        nulla posuere sollicitudin aliquam ultrices. Fames ac turpis*/}
        {/*        egestas integer eget aliquet. Dui nunc mattis enim ut tellus*/}
        {/*        elementum sagittis vitae et. Id velit ut tortor pretium viverra*/}
        {/*        suspendisse potenti nullam. Aenean vel elit scelerisque mauris*/}
        {/*        pellentesque pulvinar. Laoreet id donec ultrices tincidunt arcu*/}
        {/*        non sodales neque sodales. Tellus rutrum tellus pellentesque eu*/}
        {/*        tincidunt. Facilisis leo vel fringilla est ullamcorper eget*/}
        {/*        nulla facilisi etiam. Dolor sit amet consectetur adipiscing elit*/}
        {/*        ut aliquam purus. Mattis nunc sed blandit libero volutpat sed.*/}
        {/*        Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Mi*/}
        {/*        tempus imperdiet nulla malesuada pellentesque elit eget gravida.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="slideWrapper__thirdSlide">
          <img
            src="/SprayDecorationImage.png"
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
                  {advances.slice(0, 3).map((advance: Advance) => (
                    <span key={advance.id}>
                      <h4>{advance.id < 10 ? `0${advance.id}` : advance.id}</h4>

                      <p>{advance.text}</p>
                    </span>
                  ))}
                </div>

                <div className="thirdSlide__AdvancesModal__Controls">
                  <button className="thirdSlide__AdvancesModal__ControlsArrows">
                    <img src="/LeftArrowIcon.svg" alt="Предыдущий слайд" />
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

                  <button className="thirdSlide__AdvancesModal__ControlsArrows">
                    <img src="/RightArrowIcon.svg" alt="Следующий слайд" />
                  </button>
                </div>

                <button
                  onClick={() => changeModalWindowActive()}
                  className="advancesModal__Close"
                >
                  <img src="/XmarkIcon.svg" alt="Закрыть модальное окно" />
                </button>
              </>
            )}
          </div>

          {isModalWindowActive && <div className="darkBackground"></div>}

          <div className="thirdSlide__Advances">
            <div className="thirdSlide__Advances__Dishes">
              <img src="/DishesIcon.svg" alt="Иконка: Тарелки" />

              <p>
                a condimentum vitae sapien pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac
              </p>
            </div>

            <div className="thirdSLide__Advances__RightBlock">
              <div className="thirdSlide__Advances__RightBlock__Time">
                <img src="/CalendarIcon.svg" alt="Иконка: Календарь" />

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

        <img src="/OnpointLogo.svg" alt="Логотип Onpoint" className="logo" />
      </section>
    </>
  );
}

export default App;
