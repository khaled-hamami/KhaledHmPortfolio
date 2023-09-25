import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
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
import Drawer from "./components/Drawer"
import RouteError from "./pages/RouteError"
import { ErrorBoundary } from "./components/ErrorBoudary"
//ThemeProvider must be imported before Box or it will cause some issues
import Loader from "./pages/Loader"
import { ThemeProvider } from "@emotion/react"
import { Box } from "@mui/material"

export default function App() {
  //loader
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    //to set the theme to default only if this is the first site visit
    const checkTheme = () => {
      if (localStorage.getItem("theme") == null) localStorage.setItem("theme", "lightMode")
    }
    checkTheme()
  }, [])

  const { darkMode } = useSelector((state) => state.darkMode)
  const { settingsVisible } = useSelector((state) => state.settings)
  return loading ? (
    <Loader loading={loading} />
  ) : (
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
          <ErrorBoundary>
            <Navbar />

            {settingsVisible && <Settings />}
            <Routes>
              <Route
                path="/projects"
                element={
                  <React.Suspense>
                    <Projects />
                  </React.Suspense>
                }
              />
              <Route
                path="/"
                element={
                  <React.Suspense>
                    <Home />
                  </React.Suspense>
                }
              />
              <Route
                path="/certificates"
                element={
                  <React.Suspense>
                    <Certificates />
                  </React.Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <React.Suspense>
                    <About />
                  </React.Suspense>
                }
              />
              <Route
                path="/resume"
                element={
                  <React.Suspense>
                    <Resume />
                  </React.Suspense>
                }
              />

              <Route path="/*" Component={RouteError} />
            </Routes>
            <Footer />
            <Drawer />
          </ErrorBoundary>
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
