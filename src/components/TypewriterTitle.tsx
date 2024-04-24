"use client";
import React from "react";
import Typewrite from "typewriter-effect";

type Props = {};
const TypewriterTitle = (props: Props) => {
  return (
    <Typewrite
      options={{
        loop: true,
      }}
      onInit={(typewrite) => {
        typewrite
          .typeString(
            " visit us on site at : Meinhartsdorfer Gasse 10/2. 1150 Wien,   15. Bezirk ",
          )
          .start()
          .pauseFor(1800)
          .deleteAll()
          .typeString("or call us at 013419185.")
          .start()
          .pauseFor(1800)
          .deleteAll()
          .typeString("Write us an e-mail at office@stamm-baum.at  ")
          .start()
          .pauseFor(1800)
          .deleteAll()
          .typeString("Stay safe. Peace 🕊️ .")
          .start()
          .pauseFor(1800)
          .deleteAll();
      }}
    />
  );
};

export default TypewriterTitle;
