"use client";
import React, { useState } from "react";
import cat from "../../public/kalp-heart.gif";
import Image from "next/image";
import { motion } from "framer-motion";
function Main() {
  const [position, setPosition] = useState({ left: "", top: "" });
  const [bg, setBg] = useState("");
  const [noButtonPosition, setNoButtonPosition] = useState({
    x: "50%",
    y: "50%",
  });

  const handleYes = () => {
    setBg("bg-cover bg-[url('/gearts.gif')]");
    // alert("Awwwwwwwwwwwwww ! \n Love You Baby ..... !");
  };
  const handleNoButtonHover = () => {
    // const windowWidth = window.innerWidth;
    // const windowHeight = window.innerHeight;

    // Get button dimensions (assuming button has a fixed size)
    // Replace with actual button height

    // Calculate safe boundaries for random movement
    const maxLeft = window.screen.width / 3;
    const maxTop = window.screen.height / 3;

    // Generate random positions within the boundaries
    const randomX = Math.floor(Math.random() * maxLeft);
    const randomY = Math.floor(Math.random() * maxTop);
    console.log(randomX, randomY);
    // Update button position
    setNoButtonPosition({
      x: `${randomX}px`,
      y: `${randomY}px`,
    });
  };
  return (
    <div className={"flex w-screen h-screen flex-col" + bg}>
      <div className="flex justify-center items-center">
        {bg === "" && (
          <h1 className="lg:text-6xl font-bold my-8 text-center text-2xl">
            Will you be my <br />
            <span className="text-red-500 my-2">Valentine ?</span>
          </h1>
        )}
      </div>
      <div className="grid place-items-center w-full h-full bg-opacity-10 bg-[url('/hearts.gif')]">
        <Image src={cat} alt="cat" />
      </div>
      {!bg && (
        <div className="flex flex-row justify-center items-end lg:items-center mt-8 h-full flex-grow">
          <motion.button
            className="bg-blue-500 py-2 px-4 m-8 text-white font-bold rounded z-90"
            // whileHover={{ x: noButtonPosition.x, y: noButtonPosition.y }}
            style={{
              bottom: noButtonPosition.x,
              left: noButtonPosition.y,
              position: noButtonPosition.x !== "50%" ? "fixed" : "unset",
            }}
            onClick={handleNoButtonHover}
            onMouseEnter={handleNoButtonHover}
          >
            Nope!
          </motion.button>

          <button
            className="bg-blue-500 py-2 px-4 m-8 text-white font-bold rounded"
            onClick={handleYes}
          >
            Yes Baby!
          </button>
        </div>
      )}
    </div>
  );
}

export default Main;
