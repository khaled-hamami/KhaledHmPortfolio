import { Button, Container, Typography } from "@mui/material"
import cv from "../assets/cv.png"

export default function Resume() {
  return (
    <>
      <br />
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <br />
      <hr />
      <hr />
      <br />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          className="home-button"
          variant="contained"
          sx={{
            width: "180px",
            textShadow: "none",
            "&:hover": { color: "contrast.reverse", scale: "1.02" },
            mb: "100px",
          }}
        >
          Download my CV
        </Button>
        <img src={cv} width="80%" loading="lazy" />
        <Button
          className="home-button"
          variant="contained"
          sx={{
            width: "180px",
            textShadow: "none",
            "&:hover": { color: "contrast.reverse", scale: "1.02" },
            my: "100px",
          }}
        >
          Download my CV
        </Button>
      </Container>
    </>
  )
}
