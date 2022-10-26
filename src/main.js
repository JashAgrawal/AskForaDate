import React, { useState } from "react";
import cat from "./assets/kalp-heart.gif";
import allowed from "./allowed.json";
function Main() {
  const [postion, setPosition] = useState({ left: "500px", top: "437px" });
  const [bg, setBg] = useState("");
  const handleYes = (e) => {
    setBg("bg-cover  bg-[url('./assets/gearts.gif')]");
    alert("Awwwwwwwwwwwwww ! \n Love You Baby ..... !");
  };
  const handleNo = () => {
    const max = 240;
    const min = 120;
    const top = "" + (Math.floor(Math.random() * (max - min + 1)) + min) + "px";
    const left =
      "" + (Math.floor(Math.random() * (max - min + 1)) + min) + "px";
    if (left > 320 && left < 400) {
      handleNo();
    }
    setPosition({ left, top });
  };
  return (
    <div className={bg}>
      <div className="grid place-items-center">
        <h1 className="text-6xl font-bold  my-8">
          Would You Like To <br />
          Go Out With Me ?
        </h1>
      </div>
      <div className="bg-cover  bg-[url('./assets/hearts.gif')]">
        <div className="grid place-items-center">
          <img src={cat} />
        </div>
      </div>
      <div className="relative container my-8">
        <button
          id="No"
          className={`bg-blue-500 py-2 px-4 m-8 m-w-sm text-white font-bold fixed rounded bottom-50 left-1/3`}
          onMouseOver={handleNo}
          style={{ left: postion.left, top: postion.top }}
        >
          Nope !
        </button>
        <button
          className="bg-blue-500 py-2 px-4 m-8 m-w-sm text-white font-bold rounded fixed bottom-50  right-1/3"
          onClick={handleYes}
        >
          Yes Baby!
        </button>
      </div>
    </div>
  );
}
//fixed bottom-50 left-0 right-0

export default Main;
