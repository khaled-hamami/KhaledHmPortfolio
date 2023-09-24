import React, { useEffect, useState } from "react"
import { Box, ThemeProvider } from "@mui/material"
import { lightTheme, darkTheme } from "./config/theme"
import ParticlesBakground from "./config/Particles"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Certificates from "./pages/Certificates"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Settings from "./components/Settings"
import { useSelector } from "react-redux"
import Footer from "./components/Footer"
import Projects from "./pages/Projects.jsx"
import Drawer from "./components/Drawer"

export default function App() {
  useEffect(() => {
    //to set the theme to default only if this is the first site visit
    const checkTheme = () => {
      if (localStorage.getItem("theme") == null) localStorage.setItem("theme", "lightMode")
    }
    checkTheme()
  }, [])

  const { darkMode } = useSelector((state) => state.darkMode)
  const { settingsVisible } = useSelector((state) => state.settings)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ParticlesBakground mode={darkMode} />
      <Box
        className="background"
        sx={{
          backgroundColor: "background.default",
          backgroundImage: darkMode ? darkBgStyle : lightBgStyle,
          color: "primary.main",
        }}
      >
        <Router>
          <Navbar />
          {settingsVisible && <Settings />}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/projects" Component={Projects} />
            <Route path="/certificates" Component={Certificates} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Footer />
          <Drawer />
        </Router>
      </Box>
    </ThemeProvider>
  )
}

//background faded spots was set here because background image propertie is not available in mui theme
const lightBgStyle = `
radial-gradient(at 40% 20%, hsla(109, 100%, 98%, 1) 0px, transparent 50%),
radial-gradient(at 80% 0%, hsla(269, 0%, 100%, 1) 0px, transparent 50%),
radial-gradient(at 0% 50%, hsla(76, 100%, 94%, 1) 0px, transparent 50%),
radial-gradient(at 80% 50%, hsla(186, 83%, 63%, 1) 0px, transparent 50%),
radial-gradient(at 0% 100%, hsla(102, 0%, 100%, 1) 0px, transparent 50%),
radial-gradient(at 80% 100%, hsla(174, 34%, 51%, 0) 0px, transparent 50%),
radial-gradient(at 0% 0%, hsla(179, 59%, 67%, 1) 0px, transparent 50%);
`

const darkBgStyle = `
radial-gradient(at 40% 20%, hsla(0,0%,0%,1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(180,94%,6%,1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(0,0%,0%,1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(270,100%,9%,1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(240,67%,7%,1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(184,50%,12%,1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(261,95%,8%,1) 0px, transparent 50%);
`
