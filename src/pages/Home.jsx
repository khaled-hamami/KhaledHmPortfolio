import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import { AutoTyper } from "../utils/AutoTyper"
import pc from "../assets/image.png"
import MouseIcon from "@mui/icons-material/Mouse"

export default function Home() {
  return (
    <Box
      className="homepage"
      sx={{
        color: "rgba(150,150,150,.5)",
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
          <Typography
            sx={{
              fontFamily: "post-font",
              fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
              color: "contrast.main",
            }}
          >
            Hello!
          </Typography>
          <Typography
            sx={{
              fontFamily: "post-font",
              fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
              color: "contrast.main",
              display: "inline-block",
            }}
          >
            I'M&nbsp;
          </Typography>
          <Typography
            sx={{
              fontFamily: "post-font",
              fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
              color: "primary.main",
              display: "inline-block",
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
              fontFamily: "post-font",
              fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
              color: "primary.main",
            }}
          >
            <AutoTyper />
          </Typography>
          <Typography variant="h6" sx={{ mt: "5rem", color: "contrast.main", textShadow: "none" }}>
            As a Full Stack MERN Developer and IT student, I am dedicated to delivering high-quality
            web solutions that meet the evolving demands of the digital landscape.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              mt: "1rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "180px",
                backgroundColor: "secondary.main",
                textShadow: "none",
                "&:hover": { backgroundColor: "contrast.main", color: "contrast.reverse" },
              }}
            >
              Contact me
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "180px",
                backgroundColor: "secondary.main",
                textShadow: "none",
                "&:hover": { backgroundColor: "contrast.main", color: "contrast.reverse" },
              }}
            >
              Download my cv
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "300px", sm: "500px", md: "650px", lg: "900px" },
            height: { xs: "200px", sm: "300px", md: "400px", lg: "600px" },
          }}
        >
          <img width="100%" height="100%" src={pc} alt="pc image" />
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ width: "100%" }}>
        <Typography
          variant="h4"
          sx={{
            color: "contrast.main",
            mt: "5rem",
            fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
          }}
        >
          Get to know me
        </Typography>
        <Typography variant="h6" mt="2rem" sx={{ color: "contrast.main", textShadow: "none" }}>
          Hello! I'm Khaled Hammami, a 2nd year IT student at ISET Nabeul. Amazed by new
          technologies, I'm on a path to become a professional developer. Also my fascination with
          computer science led me to become part of an amazing communities. As I continue to learn
          and grow, I will further contribute to the world of technology
        </Typography>
      </Container>
    </Box>
  )
}
