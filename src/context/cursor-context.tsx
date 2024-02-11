"use client";
import * as React from "react";

export const CursorContext = React.createContext<any>(null);

interface CursorProviderProps {
  children: React.ReactNode;
}

const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorText, setCursorText] = React.useState("");
  const [cursorVariant, setCursorVariant] = React.useState("default");
  const changeCursor = (
    text: string,
    variant: "default" | "heart" | "project" | "bigCircle" | "skill"
  ) => {
    setCursorText(text);
    setCursorVariant(variant);
  };
  const heartEnter = () => {
    changeCursor("ME", "heart");
  };
  const projectEnter = (text: string) => {
    changeCursor(text, "project");
  };
  const bigCircleEnter = (text: string) => {
    changeCursor(text, "bigCircle");
  };
  const skillEnter = (text: string) => {
    changeCursor(text, "skill");
  };
  const makeDefault = () => {
    setCursorText("");
    setCursorVariant("default");
  };
  return (
    <CursorContext.Provider
      value={{
        makeDefault,
        heartEnter,
        skillEnter,
        cursorText,
        cursorVariant,
        projectEnter,
        bigCircleEnter,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const {
    makeDefault,
    heartEnter,
    cursorText,
    skillEnter,
    cursorVariant,
    projectEnter,
    bigCircleEnter,
  } = React.useContext(CursorContext);
  return {
    makeDefault,
    heartEnter,
    skillEnter,
    cursorText,
    cursorVariant,
    projectEnter,
    bigCircleEnter,
  };
};
export default CursorProvider;
