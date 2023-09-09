import React from "react"
import { Typewriter } from "react-simple-typewriter"
import "../styles/index.css"

export const AutoTyper = () => {
  return (
    <Typewriter
      words={["Full-Stack Developer", "MERN Stack Developer", "Programmer"]}
      loop={false}
      cursor
      cursorStyle="_"
      typeSpeed={100}
      deleteSpeed={100}
      delaySpeed={1500}
     
    />
  )
}
