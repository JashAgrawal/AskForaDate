"use client";
// This is a re-implementation of Codrop's Image Trail Effects demo
// https://tympanus.net/codrops/2019/08/07/image-trail-effects/
// Using Framer Motion
// https://framer.com/motion

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import { motion, useAnimation } from "framer-motion";
import { mix, distance, wrap } from "@popmotion/popcorn";
import {
  colors,
  center,
  powerOut4,
  generateSize,
  useAnimationLoop,
} from "./utils";
import { FaHeart } from "react-icons/fa";
import Main from "./main";

const ImagePlaceholder = ({
  position,
  index,
  color,
}: {
  position: any;
  index: number;
  color: any;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 1,
        ease: ["easeOut", powerOut4, powerOut4],
        times: [0, 0.7, 1],
      },
    });
  }, [position]);

  const style = position ? position.style : {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      style={{ color: "red" }}
      //   style={{ background: color, ...style }}
      className="placeholder"
    >
      <FaHeart size={30} color={"#be123c" + (index % 8) * 10} />
    </motion.div>
  );
};

const TrailImages = ({ distanceThreshold = 30 }) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 },
  }).current;

  const imagePositions = useRef([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1),
    };

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, colors.length - 1, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          ...generateSize(),
          zIndex: imageIndex,
        },
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });

  return (
    <div
      className="container"
      onMouseMove={(e) => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
    >
      {colors.map((color, i) => (
        <ImagePlaceholder
          index={i}
          position={imagePositions.current[i]}
          color={color}
          key={color}
        />
      ))}
      <Main />
    </div>
  );
};

export default TrailImages;
