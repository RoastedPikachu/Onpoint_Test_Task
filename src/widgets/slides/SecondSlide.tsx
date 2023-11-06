import React from "react";
import "./SecondSlide.css";

interface SlideProps {
  handleTouchStart: (event: any) => void;
  handleTouchEnd: (event: any) => void;
  styles: Object;
}

const SecondSlide: React.FC<SlideProps> = ({
  handleTouchStart,
  handleTouchEnd,
  styles,
}) => {
  const handleTouchStartEvent = (event: any) => {
    handleTouchStart(event);
  };

  const handleTouchEndEvent = (event: any) => {
    handleTouchEnd(event);
  };

  return (
    <div
      onTouchStart={(event: any) => handleTouchStartEvent(event)}
      onTouchEnd={(event: any) => handleTouchEndEvent(event)}
      className="slideWrapper__SecondSlide"
      style={styles}
    >
      <h2 className="secondSlide__MessageHeading">
        текст <br /> сообщения
      </h2>

      <div className="secondSlide__MessageWrapper">
        <div className="secondSlide__MessageWrapper__Message">
          <p className="secondSlide__MessageWrapper__MessageText">
            <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Egestas erat imperdiet sed euismod nisi porta lorem mollis.
            Risus feugiat in ante metus. Amet nisl suscipit adipiscing bibendum.
            Nunc lobortis mattis aliquam faucibus purus in massa. Cursus metus
            aliquam eleifend mi in nulla posuere sollicitudin. Malesuada
            bibendum arcu vitae elementum curabitur. Nunc consequat interdum
            varius sit. Pellentesque diam volutpat commodo sed egestas. Platea
            dictumst quisque sagittis purus sit amet. Sed velit dignissim
            sodales ut eu sem. Tellus mauris a diam maecenas sed enim ut sem.
            Tellus orci ac auctor augue mauris. Massa id neque aliquam
            vestibulum morbi blandit cursus. Amet cursus sit amet dictum sit
            amet justo. Sagittis purus sit amet volutpat consequat mauris nunc
            congue. Quis hendrerit dolor magna eget est. Pellentesque massa
            placerat duis ultricies lacus sed turpis tincidunt id. Blandit
            cursus risus at ultrices mi tempus imperdiet nulla. Sit amet est
            placerat in egestas erat imperdiet. Et netus et malesuada fames.
            Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
            Imperdiet proin fermentum leo vel. Scelerisque eu ultrices vitae
            auctor eu augue ut. Consectetur adipiscing elit pellentesque
            habitant morbi tristique senectus et netus. Sit amet nisl purus in
            mollis nunc sed id semper. At auctor urna nunc id. Sed viverra ipsum
            nunc aliquet bibendum. Scelerisque eu ultrices vitae auctor eu.
            Dolor purus non enim praesent elementum facilisis. Ut sem viverra
            aliquet eget sit amet. Ultrices neque ornare aenean euismod
            elementum nisi quis eleifend quam. Nam aliquam sem et tortor
            consequat id porta nibh venenatis. Cursus metus aliquam eleifend mi
            in. Ullamcorper eget nulla facilisi etiam. Placerat vestibulum
            lectus mauris ultrices eros in cursus. Leo in vitae turpis massa.
            Viverra justo nec ultrices dui sapien. Fames ac turpis egestas
            maecenas pharetra convallis posuere morbi leo. Eu consequat ac felis
            donec et odio pellentesque diam volutpat. Dolor purus non enim
            praesent elementum. Mauris commodo quis imperdiet massa tincidunt
            nunc pulvinar. Mauris ultrices eros in cursus turpis massa tincidunt
            dui ut. Auctor eu augue ut lectus arcu. Porta non pulvinar neque
            laoreet suspendisse. Auctor urna nunc id cursus. Imperdiet massa
            tincidunt nunc pulvinar sapien et ligula ullamcorper. Non odio
            euismod lacinia at quis. Quam nulla porttitor massa id neque aliquam
            vestibulum morbi blandit. Tellus molestie nunc non blandit massa
            enim nec dui. Interdum consectetur libero id faucibus nisl tincidunt
            eget nullam non. Consequat nisl vel pretium lectus quam. Urna
            condimentum mattis pellentesque id nibh. Sem viverra aliquet eget
            sit. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
            ultrices. Fames ac turpis egestas integer eget aliquet. Dui nunc
            mattis enim ut tellus elementum sagittis vitae et. Id velit ut
            tortor pretium viverra suspendisse potenti nullam. Aenean vel elit
            scelerisque mauris pellentesque pulvinar. Laoreet id donec ultrices
            tincidunt arcu non sodales neque sodales. Tellus rutrum tellus
            pellentesque eu tincidunt. Facilisis leo vel fringilla est
            ullamcorper eget nulla facilisi etiam. Dolor sit amet consectetur
            adipiscing elit ut aliquam purus. Mattis nunc sed blandit libero
            volutpat sed. Accumsan sit amet nulla facilisi morbi tempus iaculis
            urna. Mi tempus imperdiet nulla malesuada pellentesque elit eget
            gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
