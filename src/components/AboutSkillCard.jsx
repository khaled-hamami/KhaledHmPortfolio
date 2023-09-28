import { Box, Typography } from "@mui/material"
import React from "react"
import "../styles/index.css"
import { useSelector } from "react-redux"

export default function AboutSkillCard({ img, title }) {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <Box
      className="glow-purple"
      sx={{
        width: { xs: "80px", md: "150px", lg: "250px" },
        height: { xs: "120px", md: "130px", lg: "140px" },
        m: { xs: "10px", md: "50px" },
        bgcolor: darkMode ? "rgba(0,0,0,0.5)" : "rgba(120,60,194,.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",

        borderRadius: "15px",
        padding: { xs: "5px", sm: "10px" },
        cursor: "pointer",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <img src={img} width="60vw" height="60vw" loading="lazy" />

      <Typography color="contrast.main" fontSize="bolder">
        {title}
      </Typography>
    </Box>
  )
}
