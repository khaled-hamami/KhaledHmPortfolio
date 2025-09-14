// import { useState } from "react" // No longer needed
import PropTypes from "prop-types"
import { Global } from "@emotion/react"
import { styled } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import "../styles/index.css"
import { NavLink } from "react-router-dom"
const drawerBleeding = 25

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.primary.contrastReverse,
}))

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastReverse,
}))


export default function Drawer(props) {
  const { window, open, onClose } = props
  const container = window !== undefined ? () => window().document.body : undefined
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        sx={{ display: { sm: "none" } }}
        container={container}
        anchor="bottom"
        open={open}
        onClose={onClose}
        onOpen={onClose}
        swipeAreaWidth={0} // Disable swipe-to-open
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          {/* Remove Puller for swipe-up */}
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <CustomNavLink to="/" onClick={onClose}>HOME</CustomNavLink>
          </Box>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <CustomNavLink to="/projects" onClick={onClose}>PROJECTS</CustomNavLink>
          </Box>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <CustomNavLink to="/certificates" onClick={onClose}>CERTIFICATES</CustomNavLink>
          </Box>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <CustomNavLink to="/resume" onClick={onClose}>RESUME</CustomNavLink>
          </Box>
          <hr />
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <CustomNavLink to="/about" onClick={onClose}>ABOUT</CustomNavLink>
          </Box>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  )
}

Drawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.contrast.main,
  fontSize: "1.1rem",
  fontWeight: "bold",
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
