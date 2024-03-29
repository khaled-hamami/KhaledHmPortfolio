import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
const Home = React.lazy(() => import("./pages/Home.jsx"))
const Projects = React.lazy(() => import("./pages/Projects.jsx"))
const Certificates = React.lazy(() => import("./pages/Certificates.jsx"))
const Resume = React.lazy(() => import("./pages/Resume.jsx"))
const About = React.lazy(() => import("./pages/About.jsx"))
import Footer from "./components/Footer"
import { lightTheme, darkTheme } from "./config/theme"
import ParticlesBakground from "./config/Particles"
import Navbar from "./components/Navbar"
import Settings from "./components/Settings"
import { setParticlesFalse } from "./redux/particlesSlice"
import Drawer from "./components/Drawer"
import RouteError from "./pages/RouteError"
//ThemeProvider must be imported before Box or it will cause some issues
import Loader from "./pages/Loader"
import { ThemeProvider } from "@emotion/react"
import { Box } from "@mui/material"
import ResumeSkeleton from "./Skeletons/ResumeSkeleton"
import CardSkeleton from "./Skeletons/CardSkeleton"
import { motion } from "framer-motion"
import { Suspense } from "react"

export default function App() {
  const dispatch = useDispatch()
  //loader
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
    //to set the theme to default only if this is the first site visit
    const checkTheme = () => {
      if (sessionStorage.getItem("theme") == null) sessionStorage.setItem("theme", "lightMode")
    }
    checkTheme()

    // disable the particles if the device is used phone to reduce lag
    if (window.innerWidth < 400) {
      dispatch(setParticlesFalse())
    }
  }, [])

  const { particlesVisible } = useSelector((state) => state.particles)
  const { darkMode } = useSelector((state) => state.darkMode)
  const { settingsVisible } = useSelector((state) => state.settings)

  return loading ? (
    <Loader />
  ) : (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {particlesVisible && (
        <Suspense>
          <ParticlesBakground mode={darkMode} />
        </Suspense>
      )}
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

          {settingsVisible && (
            <motion.div
              initial={{ scale: 0.3, opacity: 0, translateY: -300 }}
              animate={{ scale: 1, opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Settings />
            </motion.div>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <React.Suspense
                  fallback={
                    <CardSkeleton
                      mappedOverArray={new Array(5).fill().map((_, index) => index * 2 + 1)}
                    />
                  }
                >
                  <Projects />
                </React.Suspense>
              }
            />
            <Route
              path="/certificates"
              element={
                <React.Suspense
                  fallback={
                    <CardSkeleton
                      mappedOverArray={new Array(4).fill().map((_, index) => index * 2 + 1)}
                    />
                  }
                >
                  <Certificates />
                </React.Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <React.Suspense fallback={<Loader />}>
                  <About />
                </React.Suspense>
              }
            />
            <Route
              path="/resume"
              element={
                <React.Suspense fallback={<ResumeSkeleton />}>
                  <Resume />
                </React.Suspense>
              }
            />

            <Route path="/*" Component={RouteError} />
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
