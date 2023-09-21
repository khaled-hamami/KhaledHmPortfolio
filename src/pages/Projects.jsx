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
    image: tuCasa,
    description: "rental web app",
  },
  {
    title: "Back 2 Gaming",
    date: "Date 2",
    image: Back2Gaming,
    description: "epic game api ",
  },
  {
    title: "Absolute Zero",
    date: "Date 3",
    image: AbsoluteZero,
    description: "heat unit converter",
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
              />
            </div>
          ))}
        </Box>
      </Container>
    </>
  )
}
