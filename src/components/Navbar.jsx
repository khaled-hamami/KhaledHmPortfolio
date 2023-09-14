import styled from "@emotion/styled"
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from "@mui/material"
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp"
import SegmentSharpIcon from "@mui/icons-material/SegmentSharp"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { setSettingsVisible } from "../redux/settingsSlice"
import "../styles/index.css"
import { useEffect, useState } from "react"
import Tilt from "react-parallax-tilt"

export default function Navbar() {
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
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
              paddingRight: "2rem",
              fontFamily: "post-font,great-font,sans-serif",
            }}
          >
            <CustomNavLink onClick={() => navigate("/")}>Home</CustomNavLink>
            <CustomNavLink onClick={() => navigate("/projects")}>Projects</CustomNavLink>
            <CustomNavLink onClick={() => navigate("/certificates")}>Certificates</CustomNavLink>
            <CustomNavLink onClick={() => navigate("/contact")}>Contact</CustomNavLink>
            <CustomNavLink onClick={() => navigate("/about")}>About</CustomNavLink>
          </Box>
          <IconButton onClick={() => dispatch(setSettingsVisible())}>
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
          <IconButton>
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}
const CustomNavLink = styled(Typography)(({ theme }) => ({
  padding: "1rem",
  color: theme.palette.contrast.main,
  fontSize: "1.3rem",
  fontWeight: "bold",
  fontFamily: "post-font,great-font,sans-serif",
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
}))
