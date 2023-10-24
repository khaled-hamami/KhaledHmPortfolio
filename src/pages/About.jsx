import React, { useState } from "react"
import { Button, Container, IconButton, TextField, Typography } from "@mui/material"

//Importing logo images
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
import contactShema from "../shemas/contact"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import contact from "../apis/contact"

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
  Git: gitLogo,
  Docker: dockerLogo,
  Jira: jiraLogo,
  VsCode: vscodeLogo,
  Linux: linuxLogo,
}

export default function About() {
  // a state to disable the submit button to prevent the user to sens multiple requests
  const [fetching, setFetching] = useState(false)

  const submit = (data) => {
    contact(data.name, data.email, data.subject, data.message, setFetching)
  }

  const form = useForm({ resolver: yupResolver(contactShema) })
  const { register, handleSubmit, formState } = form
  const { errors } = formState

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
            Contact
          </Typography>
        </legend>
        <Container
          maxWidth="xxl"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <form
            id="form"
            name="form"
            autoComplete="on"
            onSubmit={handleSubmit(submit)}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: "35px 0 35px 0",
            }}
          >
            <TextField
              autoComplete="on"
              name="name"
              color="primary"
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              {...register("name")}
              error={errors.name ? true : false}
              helperText={errors.name?.message}
              sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
            />
            <TextField
              autoComplete="on"
              name="email"
              color="primary"
              id="email"
              label="Email"
              variant="outlined"
              type="text"
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
              sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
            />
            <TextField
              id="subject"
              autoComplete="on"
              name="subject"
              color="primary"
              label="Subject"
              variant="outlined"
              type="text"
              {...register("subject")}
              error={errors.subject ? true : false}
              helperText={errors.subject?.message}
              sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
            />
            <TextField
              id="message"
              autoComplete="on"
              color="primary"
              name="messageS"
              label="Message"
              variant="outlined"
              type="text"
              {...register("message")}
              error={errors.message ? true : false}
              helperText={errors.message?.message}
              sx={{ width: "80%", m: "30px", maxWidth: "1000px" }}
              multiline
              rows={6}
            />
            <Button
              id="submit"
              className="home-button"
              variant="contained"
              type="submit"
              disabled={fetching}
              sx={{
                width: "230px",
                textShadow: "none",
                "&:hover": { color: "contrast.reverse", scale: "1.02" },
                mb: "100px",
              }}
            >
              Submit
            </Button>
          </form>
        </Container>
      </fieldset>
    </>
  )
}
