import React from "react"
import { Box, Container, IconButton, Typography } from "@mui/material"

// Importing logo images
import react from "../assets/Logos/react.webp"
import mongodbLogo from "../assets/Logos/mongodb.webp"
import cLogo from "../assets/Logos/c.webp"
import canvaLogo from "../assets/Logos/canva.webp"
import cssLogo from "../assets/Logos/css.webp"
import dockerLogo from "../assets/Logos/docker.webp"
import expressLogo from "../assets/Logos/express.webp"
import gitLogo from "../assets/Logos/git.webp"
import htmlLogo from "../assets/Logos/html.webp"
import javaLogo from "../assets/Logos/java.webp"
import jiraLogo from "../assets/Logos/jira.webp"
import jsLogo from "../assets/Logos/js.webp"
import linuxLogo from "../assets/Logos/linux.webp"
import mongooseLogo from "../assets/Logos/mongoose.webp"
import muiLogo from "../assets/Logos/mui.webp"
import nodeLogo from "../assets/Logos/node.webp"
import oracleLogo from "../assets/Logos/oracle.webp"
import pythonLogo from "../assets/Logos/python.webp"
import reduxLogo from "../assets/Logos/redux.webp"
import typescriptLogo from "../assets/Logos/typescript.webp"
import vscodeLogo from "../assets/Logos/vscode.webp"
import AboutSkillCard from "../components/AboutSkillCard"
import Tilt from "react-parallax-tilt"

const Skills = {
  react: react,
  Mongodb: mongodbLogo,
  Node: nodeLogo,
  Express: expressLogo,
  Mui: muiLogo,
  Javascript: jsLogo,
  Typescript: typescriptLogo,
  Java: javaLogo,
  Python: pythonLogo,
  C: cLogo,
  Css: cssLogo,
  Canva: canvaLogo,
  Html: htmlLogo,
  Oracle: oracleLogo,
  Mongoose: mongooseLogo,
  Redux: reduxLogo,
  // Github: githubLogo,
  Git: gitLogo,
  Docker: dockerLogo,
  Jira: jiraLogo,
  VsCode: vscodeLogo,
  Linux: linuxLogo,
}

export default function About() {
  return (
    <>
      <br />
      <Typography ml="20px" variant="h4" gutterBottom>
        About
      </Typography>
      <br />
      <hr />
      <hr />
      <br />
      <fieldset
        style={{
          width: "95%",
          objectPosition: "center",
          margin: "0 auto 100px  auto ",
          borderColor: " #783cc2",
          borderRadius: "20px",
        }}
      >
        <legend style={{ marginLeft: "30px" }}>
          <Typography variant="h4" gutterBottom>
            TechStack
          </Typography>
        </legend>
        <Container
          maxWidth="xxl"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {Object.keys(Skills).map((skill) => (
            <Tilt
              perspective={1000}
              glareEnable={false}
              tiltReverse={true}
              glareColor="transparent"
              style={{ borderRadius: "20px" }}
              key={skill}
            >
              <AboutSkillCard img={Skills[skill]} title={skill} />
            </Tilt>
          ))}
        </Container>
      </fieldset>
      
    </>
  )
}
