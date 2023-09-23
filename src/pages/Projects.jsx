import React from "react"
import { Box, Container, Typography } from "@mui/material"
import ProjectCard from "../components/ProjectCard"
import tuCasa from "../assets/tuCasa.png"
import Back2Gaming from "../assets/Back2Gaming.png"
import AbsoluteZero from "../assets/AbsoluteZero.png"
import Python from "../assets/Python.png"
import Portfolio from "../assets/Portfolio.png"

const projectData = [
  {
    title: "TU CASA TN",
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
    title: "BACK TO GAMING",
    about: "Gaming News ",
    image: Back2Gaming,
    link: "https://Back2Gaming.netlify.app/",
    sourceCode: "https://github.com/khaled-hamami/Back2Gaming",
    description: ["REACT JS", "EPIC GAMES API", "MATERIAL-UI", "REACT-PARALLEX"],
  },
  {
    title: "ABSOLUTE ZERO",
    about: "Heat Unit Converter",
    image: AbsoluteZero,
    link: "https://Back2Gaming.netlify.app/",
    sourceCode: "https://github.com/khaled-hamami/AbsoluteZero",
    description: ["HTML5", "CSS3", "JAVASCRIPT"],
  },
  {
    title: "VIDEO GAMES PYHTON ANALYSIS",
    about: "vg sales ",
    image: Python,
    link: "https://drive.google.com/drive/folders/14CdupGO8Sqo5IeyCQcrxppFaxR7ViQsH?usp=sharing",
    sourceCode: "https://github.com/khaled-hamami/Py-VgSales-Analysis",
    description: ["NUMPY", "SEABORN", "MATPLOTLIB", "PANDAS"],
  },
  {
    title: "PORTFOLIO",
    about: "My Personal Portfolio",
    image: Portfolio,
    link: "https://KhaledHmtn",
    sourceCode: "https://github.com/khaled-hamami/KhaledHmPortfolio",
    description: ["REACT", "REDUX | TOOLKIT", "JOTAI", "MATERIAL-UI", "TS-PARTICLES"],
  },
]

export default function ProjectsPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Container
        maxWidth="xxl"
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
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
                marginBottom: {
                  xs: "50px",
                  sm: "60px",
                  md: "70px",
                },
              }}
            >
              <ProjectCard
                title={project.title}
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
