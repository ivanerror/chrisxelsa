import React, { useState } from "react";
import LinkGenerator from "./component/LinkGenerator/Link";
import Intro from "./component/intro";
import Content from "./component/content";
import {
  Routes,
  Route,
  useParams,
  useQuery,
  useSearchParams,
} from "react-router-dom";

import { songPath } from "./constant";

const ChooseSong = (songCode) => {
  return songPath[songCode];
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChrisXElsaContainer />} />
        <Route path="/link-generator" element={<LinkGenerator />} />
      </Routes>
    </>
  );
}

const ChrisXElsaContainer = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  const name = searchParams.get("name");

  let audioPath = ChooseSong(user);
  let audio = new Audio(audioPath);

  const startAudio = () => {
    audio.play();
  };

  const handleBukaUndangan = () => {
    console.log("Buka undangan");
    setIsOpened(true);
    startAudio();
  };

  return (
    <div className="bg-biru-tua">
      <div className="container mx-auto max-w-screen-md min-h-screen bg-biru-tua shadow-2xl">
        <Intro
          onClickBukaUndangan={handleBukaUndangan}
          isOpened={isOpened}
          name={name}
        />
        {isOpened && (
          <>
            <Content />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
