"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useVariants, spring, spring2 } from "./config";
import { useCursor } from "@/context/cursor-context";
import { FaHeart } from "react-icons/fa";
const Cursor = ({ children }: { children: any }) => {
  const { cursorVariant, cursorText } = useCursor();
  const ref = useRef(null);
  const variants = useVariants(ref, 100);

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        className="circle  max-lg:hidden"
        animate={cursorVariant}
        transition={spring}
      >
        <FaHeart size={30} color="red" />
        {/* <span className="cursorText">{cursorText}</span> */}
      </motion.div>

      {children}
    </div>
  );
};

export default Cursor;
