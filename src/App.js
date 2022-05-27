import React, { useState } from "react";
import GoogleMaps from "./component/GoogleMaps";
import Intro from "./component/intro";
import Content from "./component/content";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  let audio = new Audio("songs/otherside.mp3");

  const startAudio = () => {
    audio.play();
  };

  const handleBukaUndangan = () => {
    console.log("Buka undangan");
    setIsOpened(true);
    startAudio();
  };

  return (
    <>
      <div className="bg-biru-tua">
        <div className="container mx-auto max-w-screen-md min-h-screen bg-biru-tua shadow-2xl">
          <Intro onClickBukaUndangan={handleBukaUndangan} isOpened={isOpened} />
          {isOpened && (
            <>
              <Content />
            </>

            // <GoogleMaps
            //   className="flex justify-center"
            //   lat={-8.07375035064174}
            //   lng={111.9045955200124}
            //   getDirectionUrl="https://www.google.com/maps/place/Crown+Victoria+Hotel/@-8.0737392,111.9024038,17z/data=!3m1!4b1!4m8!3m7!1s0x2e78e2e33e8320df:0xa675321a9341eba!5m2!4m1!1i2!8m2!3d-8.0737445!4d111.9045925"
            // />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
