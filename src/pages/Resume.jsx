import { Button, Container, Typography } from "@mui/material"
import handleDownloadClick from "../utils/DownloadResume"
import cv from "../assets/cv.png"
import smallCv from "../assets/cv-small.png"
import { useEffect, useState } from "react"

export default function Resume() {
  // Load the high-resolution image asynchronously
  const [highResImage, setHighResImage] = useState(null)
  useEffect(() => {
    // Load the high-resolution image asynchronously
    const img = new Image()
    img.src = cv
    img.onload = () => {
      setHighResImage(img.src)
    }
  }, [cv])

  return (
    <>
      <br />
      <Typography ml="20px" variant="h4" gutterBottom>
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
            width: "230px",
            textShadow: "none",
            "&:hover": { color: "contrast.reverse", scale: "1.02" },
            mb: "100px",
          }}
          onClick={() => handleDownloadClick()}
        >
          Download my Resume
        </Button>
        <img
          src={highResImage || smallCv}
          width="80%"
          loading="lazy"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: highResImage != null ? "blur(0px)" : "blur(5px)",
          }}
        />
        <Button
          className="home-button"
          variant="contained"
          sx={{
            width: "230px",
            textShadow: "none",
            "&:hover": { color: "contrast.reverse", scale: "1.02" },
            my: "100px",
          }}
          onClick={() => handleDownloadClick()}
        >
          Download my Resume
        </Button>
      </Container>
    </>
  )
}
