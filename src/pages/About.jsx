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
import Tilt from "react-parallax-tilt"

const Skills = {
  react: react,
  mongodb: mongodbLogo,
  node: nodeLogo,
  express: expressLogo,
  mui: muiLogo,
  html: htmlLogo,
  css: cssLogo,
  canva: canvaLogo,
  c: cLogo,
  python: pythonLogo,
  java: javaLogo,
  js: jsLogo,
  oracle: oracleLogo,
  mongoose: mongooseLogo,
  redux: reduxLogo,
  typescript: typescriptLogo,
  git: gitLogo,
  docker: dockerLogo,
  jira: jiraLogo,
  vscode: vscodeLogo,
  linux: linuxLogo,
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
          margin: "0 auto",
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
            <Tilt perspective={1000} glareEnable={false} glareColor="transparent" key={skill}>
              <AboutSkillCard img={Skills[skill]} title={skill} />
            </Tilt>
          ))}
        </Container>
      </fieldset>
      <Typography m="120px 20px" variant="h4" gutterBottom>
        Contact
      </Typography>
    </>
  )
}
