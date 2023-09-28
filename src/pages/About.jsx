import React from "react"
import { Container, Typography } from "@mui/material"

// Importing logo images
import react from "../assets/Logos/react.png"
import mongodbLogo from "../assets/Logos/mongodb.png"
import cLogo from "../assets/Logos/c.png"
import canvaLogo from "../assets/Logos/canva.png"
import cssLogo from "../assets/Logos/css.png"
import dockerLogo from "../assets/Logos/docker.png"
import expressLogo from "../assets/Logos/express.png"
import gitLogo from "../assets/Logos/git.png"
import htmlLogo from "../assets/Logos/html.png"
import javaLogo from "../assets/Logos/java.png"
import jiraLogo from "../assets/Logos/jira.png"
import jsLogo from "../assets/Logos/js.png"
import linuxLogo from "../assets/Logos/linux.png"
import mongooseLogo from "../assets/Logos/mongoose.png"
import muiLogo from "../assets/Logos/mui.png"
import nodeLogo from "../assets/Logos/node.png"
import oracleLogo from "../assets/Logos/oracle.png"
import pythonLogo from "../assets/Logos/python.png"
import reduxLogo from "../assets/Logos/redux.png"
import typescriptLogo from "../assets/Logos/typescript.png"
import vscodeLogo from "../assets/Logos/vscode.png"
import AboutSkillCard from "../components/AboutSkillCard"

const Skills = {
  react: react,
  mongodb: mongodbLogo,
  node: nodeLogo,
  express: expressLogo,
  mui: muiLogo,
  mongoose: mongooseLogo,
  c: cLogo,
  css: cssLogo,
  docker: dockerLogo,
  git: gitLogo,
  html: htmlLogo,
  java: javaLogo,
  canva: canvaLogo,
  jira: jiraLogo,
  js: jsLogo,
  linux: linuxLogo,
  oracle: oracleLogo,
  python: pythonLogo,
  redux: reduxLogo,
  typescript: typescriptLogo,
  vscode: vscodeLogo,
}
import { useSelector } from "react-redux"

export default function About() {

  return (
    <>
      <br />
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <br />
      <hr />
      <hr />
      <br />
      <Container
        maxWidth="xxl"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Object.keys(Skills).map((skill) => (
          <AboutSkillCard img={Skills[skill]} title={skill} key={skill} />
        ))}
      </Container>
    </>
  )
}
