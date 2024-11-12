import { Box, Button, Container, Typography } from "@mui/material"
import { AutoTyper } from "../utils/AutoTyper"
import homeImage1 from "../assets/images/Home-image-1.webp"
import homeImage2 from "../assets/images/Home-image-2.webp"
import smallHomeImage1 from "../assets/images/Home-image-small-1.webp"
import smallHomeImage2 from "../assets/images/Home-image-small-2.webp"
import handleDownloadClick from "../utils/DownloadResume"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()
  //lazy load image with blured background
  const [highResHomeImage1, setHighResHomeImage1] = useState(null)
  const [highResHomeImage2, setHighResHomeImage2] = useState(null)

  useEffect(() => {
    // Load the high-resolution image asynchronously
    const homeImg1 = new Image()
    const homeImg2 = new Image()
    homeImg1.src = homeImage1
    homeImg2.src = homeImage2
    homeImg1.onload = () => {
      setHighResHomeImage1(homeImg1.src)
    }
    homeImg2.onload = () => {
      setHighResHomeImage2(homeImg2.src)
    }
  }, [homeImage1, homeImage2])

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [".7 1", "5 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const xProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])

  return (
    <Box
      className="homepage"
      sx={{
        color: "rgba(150,150,150,.5)",
        mt: { xs: "200px", sm: "0px" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "nowrap",
          justifyContent: { xs: "space-evenly", sm: "space-between" },
          alignItems: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <Box width="80%">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, translateX: -100 }}
            animate={{ opacity: 1, scale: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "contrast.main",
                letterSpacing: "-1px",
              }}
            >
              Hello!
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "contrast.main",
                display: "inline-block",
                letterSpacing: "-1px",
              }}
            >
              I&apos;M&nbsp;
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "primary.main",
                display: "inline-block",
                letterSpacing: "-1px",
              }}
            >
              KHALED HAMMAMI
            </Typography>
            <br />
            <br />
            <br />
            <Typography
              component="div"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "primary.main",
              }}
            >
              <AutoTyper />
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, translateX: -100 }}
            animate={{ opacity: 1, scale: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                mt: "5rem",
                color: "contrast.main",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                textShadow: "none",
                fontWeight: "600",
              }}
            >
              As a Full Stack MERN Developer and IT student, I am dedicated to delivering
              high-quality web solutions that meet the evolving demands of the digital landscape.
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "1rem",
              alignItems: "center",
              mt: "3rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, translateY: -100 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                className="home-button"
                variant="contained"
                sx={{
                  fontSize: { xs: ".75rem", sm: ".95rem" },
                  width: "180px",
                  textShadow: "none",
                  "&:hover": { color: "contrast.reverse", scale: "1.02" },
                }}
                onClick={() => {
                  navigate("/about#form")
                }}
              >
                Contact me
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, translateX: -100 }}
              animate={{ opacity: 1, scale: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                className="home-button"
                variant="contained"
                sx={{
                  fontSize: { xs: ".75rem", sm: ".95rem" },
                  width: "180px",
                  textShadow: "none",
                  "&:hover": { color: "contrast.reverse", scale: "1.02" },
                }}
                onClick={() => handleDownloadClick()}
              >
                Download my cv
              </Button>
            </motion.div>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "300px", sm: "650px", md: "750px", lg: "1000px" },
            height: { xs: "250px", sm: "300px", md: "500px", lg: "650px" },
          }}
        >
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8, translateX: 300 }}
            animate={{ opacity: 1, scale: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            style={{ width: "100%", height: "100%" }}
          >
            <img
              className="home-image"
              width="100%"
              height="100%"
              src={highResHomeImage1 || smallHomeImage1}
              alt="pc image"
              loading="lazy"
              style={{
                filter: highResHomeImage1 != null ? "blur(0px)" : "blur(5px) ",
                transition: "filter 0.8s ease, opacity 0.8s ease",
              }}
            />
          </motion.div>
        </Box>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          mb: { xs: "100px", sm: "150px", md: "200px", lg: "250px" },
          mt: { xs: "200px", sm: "70px" },
        }}
      >
        <hr
          className="style-seven"
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            width: "100%",
          }}
        />
        <br />
        <hr
          className="style-seven"
          style={{
            position: "absolute",
            left: "0",
            right: "0",
            width: "100%",
          }}
        />
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row-reverse" },
            alignItems: "center",
            justifyContent: "space-between",
            mt: "160px",
          }}
        >
          <Box mb="100px">
            <motion.div style={{ scale: scaleProgress, opacity: scrollYProgress }}>
              <Typography
                ref={ref}
                variant="h4"
                sx={{
                  color: "contrast.main",
                  mt: "3.5rem",
                  fontSize: { xs: "2rem", md: "3rem" },
                  letterSpacing: "-1px",
                }}
              >
                Get to know<span style={{ color: "#be33f5" }}> me</span>
              </Typography>
            </motion.div>
            <motion.div
              style={{
                scale: scaleProgress,
                opacity: scrollYProgress,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mt: "2rem",
                  color: "contrast.main",
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  textShadow: "none",
                  fontWeight: "600",
                }}
              >
                Hello! I&apos;m Khaled Hammami <br /> a 2nd year IT student at ISET Nabeul. Amazed by new
                technologies, I&apos;m on a path to become a professional developer. Also my fascination
                with computer science led me to become part of an amazing communities. <br />
                As I continue to learn and grow, I will further contribute to the world of
                technology
              </Typography>
            </motion.div>
          </Box>
          <Box
            sx={{
              width: { xs: "280px", sm: "1200px", md: "1200px", lg: "1500px" },
              height: { xs: "235px", sm: "250px", md: "300px", lg: "450px" },

              overflow: { xs: "hidden", sm: "visible" },
            }}
          >
            <motion.img
              width="100%"
              height="100%"
              src={highResHomeImage2 || smallHomeImage2}
              alt="pc image"
              loading="lazy"
              style={{
                filter: highResHomeImage2 != null ? "blur(0px)" : "blur(5px)",
                y: xProgress,
                scale: scaleProgress,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
