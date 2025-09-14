import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp"
import SegmentSharpIcon from "@mui/icons-material/SegmentSharp"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setSettingsVisible } from "../redux/settingsSlice"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Tilt from "react-parallax-tilt"
import "../styles/index.css"

export default function Navbar(props) {
Navbar.propTypes = {
  onDrawerOpen: PropTypes.func,
}
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    let timeout

    const handleScroll = () => {
      if (!scrolling) {
        setScrolling(true)
      }

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        setScrolling(false)
      }, 1500)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolling])

  const handleSettingsVisible = () => {
    dispatch(setSettingsVisible())
  }

  return (
    <AppBar
      className={scrolling ? "hidden" : ""}
      sx={{
        position: "sticky",
        backgroundColor: "transparent",
        backdropFilter: "blur(5px)",
        top: 0,
        transition: "transform 0.3s ease",
        transform: scrolling ? "translateY(-100%)" : "none",
        width: "100%",
      }}
    >
      <Container maxWidth="1">
        <Toolbar
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            color="primary.main"
            fontFamily="post-font"
            sx={{
              fontSize: { xs: "1.5rem", md: "1.8rem", lg: "2.2rem" },
              cursor: "pointer",
              flex: "1",
              fontWeight: "600",
            }}
            onClick={() => navigate("/")}
          >
            <Tilt
              style={{ width: "200px", margin: "0" }}
              perspective={30000}
              glareEnable={false}
              scale={1}
              glareColor={"transparent"}
            >
              &lt;KHM/&gt;
            </Tilt>
          </Typography>
          <Box
            sx={{
              flex: "6",
              display: { xs: "none", sm: "flex" },
              justifyContent: "right",
              paddingRight: { md: "1.5rem", lg: "2rem" },
              fontFamily: "post-font,great-font,sans-serif",
            }}
          >
            <CustomNavLink
              style={({ isActive }) => {
                return { color: isActive ? "#be33f5" : "" }
              }}
              to="/"
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              style={({ isActive }) => {
                return { color: isActive ? "#be33f5" : "" }
              }}
              to="/projects"
            >
              Projects
            </CustomNavLink>
            <CustomNavLink
              style={({ isActive }) => {
                return { color: isActive ? "#be33f5" : "" }
              }}
              to="/certificates"
            >
              Certificates
            </CustomNavLink>
            <CustomNavLink
              style={({ isActive }) => {
                return { color: isActive ? "#be33f5" : "" }
              }}
              to="/resume"
            >
              Resume
            </CustomNavLink>
            <CustomNavLink
              style={({ isActive }) => {
                return { color: isActive ? "#be33f5" : "" }
              }}
              to="/about"
            >
              About
            </CustomNavLink>
          </Box>
          <IconButton onClick={handleSettingsVisible} name="navigation button">
            <SettingsSharpIcon
              sx={{
                color: "primary.main",
                display: {
                  xs: "none",
                  md: "block",
                },
                "&:hover": { color: "contrast.main" },
              }}
            />
          </IconButton>
          <IconButton onClick={props.onDrawerOpen} name="drawer button">
            <SegmentSharpIcon
              sx={{
                color: "primary.main",
                display: {
                  md: "none",
                },
                "&:hover": { color: "contrast.main" },
              }}
            />
          </IconButton>
          <IconButton onClick={handleSettingsVisible} name="navigation button">
            <SettingsSharpIcon
              sx={{
                color: "primary.main",
                display: {
                  md: "none",
                },
                "&:hover": { color: "contrast.main" },
              }}
            />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.contrast.main,
  fontSize: "1.1rem",
  fontWeight: "bold",
  fontFamily: "post-font, great-font, sans-serif",
  cursor: "pointer",
  position: "relative",
  transition: "color 0.3s ease",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: "1.7px",
    background: theme.palette.primary.main,
    transition: "width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1.1)",
    transformOrigin: "center",
  },
  "&:hover": {
    color: theme.palette.contrast.main,
    "&::after": {
      width: "80%",
    },
  },

  // Responsive styling
  [theme.breakpoints.up("sm")]: {
    padding: ".3rem",
    fontSize: ".8rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: ".7rem",
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem",
    fontSize: "1.1rem",
  },
}))
