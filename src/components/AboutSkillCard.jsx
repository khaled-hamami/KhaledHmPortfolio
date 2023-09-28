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
        width: "200px",
        height: "140px",
        m: "50px",
        bgcolor: darkMode ? "rgba(0,0,0,0.5)" : "rgba(120,60,194,.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #783CC2",
        borderRadius: "5px",
        padding: "10px",
        cursor: "pointer",
        "&:hover": { transform: "scale(1.02)" },
      }}
    >
      <img src={img} width="80px" height="80px" />

      <Typography color="contrast.main" fontSize="bolder">
        {title}{" "}
      </Typography>
    </Box>
  )
}
