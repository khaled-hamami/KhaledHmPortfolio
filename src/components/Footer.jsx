import { useState } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { GitHub, Facebook, LinkedIn, Email } from "@mui/icons-material"
import Popup from "../utils/Popup"
import Logo from "../assets/favicon.webp"
import styled from "@emotion/styled"
import copyToClipboard from "../utils/CopyToClipboard"

const redirect = (link) => {
  window.open(link, "_blank")
}

export default function Footer() {
  const [open, SetOpen] = useState(false)

  return (
    <>
      {open && <Popup />}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          height: "50px",
          mt: { xs: "80px", md: "100px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: { xs: "3px", md: "50px" },
        }}
      >
        <Box width="100%" display="flex" justifyContent="center" alignItems="center">
          <Typography
            sx={{
              color: "contrast.main",
              textShadow: "none",
              fontFamily: "sans-serif",
              fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem", lg: "1rem" },
            }}
          >
            Copyright 2023 &copy; Khaled Hammami
          </Typography>
        </Box>

        <Box
          onClick={() => location.reload()}
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={Logo}
            alt="Logo Image"
            width="30px"
            style={{ cursor: "pointer" }}
            onClick={() => location.reload()}
          />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
          <StyledIcon
            sx={{ marginX: { xs: "5px", sm: "10px", md: "20px" } }}
            onClick={() => redirect("https://github.com/khaled-hamami")}
          >
            <GitHub sx={{ color: "contrast.main", fontSize: { xs: "1.2rem", sm: "1.6rem" } }} />
          </StyledIcon>
          <StyledIcon
            sx={{ marginX: { xs: "5px", sm: "10px", md: "20px" } }}
            onClick={() => redirect("https://www.linkedin.com/in/khaledhm")}
          >
            <LinkedIn sx={{ color: "contrast.main", fontSize: { xs: "1.2rem", sm: "1.6rem" } }} />
          </StyledIcon>
          <StyledIcon
            sx={{ marginX: { xs: "5px", sm: "10px", md: "20px" } }}
            onClick={() => redirect("https://www.facebook.com/profile.php?id=100028537561096")}
          >
            <Facebook sx={{ color: "contrast.main", fontSize: { xs: "1.2rem", sm: "1.6rem" } }} />
          </StyledIcon>
          <StyledIcon
            sx={{ marginX: { xs: "5px", sm: "10px", md: "20px" } }}
            onClick={() => {
              SetOpen(true)
              copyToClipboard("khaled.hammami.740@gmail.com")
            }}
          >
            <Email sx={{ color: "contrast.main", fontSize: { xs: "1.2rem", sm: "1.6rem" } }} />
          </StyledIcon>
        </Box>
      </Box>
    </>
  )
}

const StyledIcon = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    boxShadow: "0 4px 6px -1px rgba(150, 0, 255, 0.5)",
    transform: "scale(1.05)",
  },
}))
