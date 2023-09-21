import React from "react"
import { Box, Container, Typography } from "@mui/material"
import ProjectCard from "../components/ProjectCard"
import tuCasa from "../assets/tuCasa.png"
import Back2Gaming from "../assets/Back2Gaming.png"
import AbsoluteZero from "../assets/AbsoluteZero.png"

const projectData = [
  {
    title: "Tu Casa tn",
    date: "Date 1",
    about: "Rental Webapp",
    image: tuCasa,
    link: "https://tucasatn.netlify.app/",
    sourceCode: "https://github.com/khaled-hamami/tuCasa",
    description: [
      "REACT JS",
      "EXPRESS / NODE JS",
      "MATERIAL-UI",
      "JOTAI",
      "YUP",
      "REACT HOOK FORM",
    ],
  },
  {
    title: "Back 2 Gaming",
    date: "Date 2",
    about: "Gaming News ",
    image: Back2Gaming,
    link: "https://Back2Gaming.netlify.app/",
    sourceCode: "https://github.com/khaled-hamami/Back2Gaming",
    description: ["REACT JS", "EPIC GAMES API", "MATERIAL-UI", "REACT-PARALLEX"],
  },
  {
    title: "Absolute Zero",
    date: "Date 3",
    about: "Heat Unit Converter",
    image: AbsoluteZero,
    link: "https://Back2Gaming.netlify.app/",
    sourceCode: "https://github.com/khaled-hamami/AbsoluteZero",
    description: ["HTML5", "CSS3", "JAVASCRIPT"],
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
      >
        <br />
        <br />
        <br />
        <Box width="100%" display="flex" flexWrap="wrap" justifyContent="space-evenly">
          {projectData.map((project, index) => (
            /*the div is for isolating the state so it desnt becoe shared*/
            <div
              key={index}
              style={{
                width: { xs: "100%", sm: "80%", lg: "50%" },
                marginBottom: "50px",
                mb: { xs: "50px", sm: "60px", md: "70px" },
              }}
            >
              <ProjectCard
                title={project.title}
                date={project.date}
                image={project.image}
                description={project.description}
                about={project.about}
                link={project.link}
                sourceCode={project.sourceCode}
              />
            </div>
          ))}
        </Box>
      </Container>
    </>
  )
}
