import React, { useEffect, useState } from "react"
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
import contactShema from "../shemas/contactSchema"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import contact from "../apis/contact"
import Popup from "../utils/Popup"
import { motion } from "framer-motion"

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])
  // a state to disable the submit button to prevent the user to spam multiple requests
  const [fetching, setFetching] = useState(false)
  //a function to handle error and success popups
  const handleResult = () => {
    return (
      <Popup data={success != "" ? success : error} status={success != "" ? "success" : "error"} />
    )
  }
  //popup state of the form submission alert incase of error
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const submit = async (data) => {
    await contact(
      data.name,
      data.email,
      data.subject,
      data.message,
      setFetching,
      setError,
      setSuccess
    )
    handleResult()
    setTimeout(() => {
      document.getElementById("form").reset()
    }, 500)
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
          {Object.keys(Skills).map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, translateX: index % 2 == 0 ? -100 : 100 }}
              animate={{ opacity: 1, translateX: 0, transition: { delay: index * 0.05 + 0.2 } }}
              transition={{ duration: 0.5 }}
              key={skill}
            >
              <Tilt
                perspective={1000}
                glareEnable={false}
                tiltReverse={true}
                glareColor="transparent"
                style={{ borderRadius: "20px" }}
              >
                <AboutSkillCard img={Skills[skill]} title={skill} />
              </Tilt>
            </motion.div>
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
                mb: "40px",
              }}
            >
              Submit
            </Button>
            {(error || success) && handleResult()}
          </form>
        </Container>
      </fieldset>
    </>
  )
}
