import React, { useEffect } from "react"
import { Box, Container, Typography } from "@mui/material"
import ProjectCard from "../components/ProjectCard"
import tuCasa from "../assets/images/tuCasa.webp"
import Back2Gaming from "../assets/images/Back2Gaming.webp"
import AbsoluteZero from "../assets/images/AbsoluteZero.webp"
import Python from "../assets/images/Python.webp"
import Portfolio from "../assets/images/Portfolio.webp"
import tuCasaSmall from "../assets/images/tuCasa-small.webp"
import Back2GamingSmall from "../assets/images/Back2Gaming-small.webp"
import AbsoluteZeroSmall from "../assets/images/AbsoluteZero-small.webp"
import PythonSmall from "../assets/images/Python-small.webp"
import PortfolioSmall from "../assets/images/Portfolio-small.webp"
import EventProIEEEsmall from "../assets/images/EventProIEEEsmall.webp"
import EventProIEEE from "../assets/images/EventProIEEE.webp"

const projectData = [
  {
    title: "TU CASA TN",
    date: "Date 1",
    about: "Rental Webapp",
    image: tuCasa,
    smallImage: tuCasaSmall,
    link: "https://tucasatn.vercel.app",
    sourceCode: "https://github.com/khaled-hamami/tuCasa",
    description: [
      "REACT JS",
      "EXPRESS",
      "NODE JS",
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
    smallImage: Back2GamingSmall,
    link: "https://Back2Gaming.vercel.app/",
    sourceCode: "https://github.com/khaled-hamami/Back2Gaming",
    description: ["REACT JS", "EPIC GAMES API", "MATERIAL-UI", "REACT-PARALLEX"],
  },
  {
    title: "ABSOLUTE ZERO",
    about: "Heat Unit Converter",
    image: AbsoluteZero,
    smallImage: AbsoluteZeroSmall,
    link: "https://absolutezero.netlify.app/",
    sourceCode: "https://github.com/khaled-hamami/AbsoluteZero",
    description: ["HTML5", "CSS3", "JAVASCRIPT"],
  },
  {
    title: "VIDEO GAMES PYHTON ANALYSIS",
    about: "Video Games Sales",
    image: Python,
    smallImage: PythonSmall,
    link: "https://drive.google.com/drive/folders/14CdupGO8Sqo5IeyCQcrxppFaxR7ViQsH?usp=sharing",
    sourceCode: "https://github.com/khaled-hamami/Py-VgSales-Analysis",
    description: ["NUMPY", "SEABORN", "MATPLOTLIB", "PANDAS"],
  },
  {
    title: "PORTFOLIO",
    about: "My Personal Portfolio",
    image: Portfolio,
    smallImage: PortfolioSmall,
    link: "https://KhaledHm.tn",
    sourceCode: "https://github.com/khaled-hamami/KhaledHmPortfolio",
    description: ["REACT", "REDUX | TOOLKIT", "JOTAI", "MATERIAL-UI", "TS-PARTICLES"],
  },
  {
    title: "Event Pro IEEE",
    about: "IEEE Club Event Manager",
    image: EventProIEEE,
    smallImage: EventProIEEEsmall,
    link: "https://event-pro-ieee.vercel.app",
    sourceCode: "https://github.com/khaled-hamami/Event-Pro-IEEE",
    description: ["FRAMER MOTION", "REACT", "REACT FORM HOOK", "MATERIAL-UI", "YUP"],
  },
]

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <br />
      <Typography ml="20px" variant="h4" gutterBottom>
        Projects
      </Typography>
      <br />
      <hr />
      <hr />
      <br />
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
                smallImage={project.smallImage}
              />
            </div>
          ))}
        </Box>
      </Container>
    </>
  )
}
