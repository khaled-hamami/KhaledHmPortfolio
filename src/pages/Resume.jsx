import { Button, Container, Typography } from "@mui/material"
import handleDownloadClick from "../utils/DownloadResume"
import cv from "../assets/images/cv.webp"
import smallCv from "../assets/images/cv-small.webp"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
