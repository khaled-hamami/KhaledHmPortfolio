import { Box, Container, Typography } from "@mui/material"
import CertificateCard from "../components/CertificateCard"
import googleCertif from "../assets/certif1.png"
import reactCertif from "../assets/certif2.png"
import canvaCertif from "../assets/certif3.png"

const CertificateData = [
  {
    title: "GOOGLE",
    image: googleCertif,
    date: "9/07/2023",
    about: "Technical Support Fundamentals",
    link: "https://www.coursera.org/account/accomplishments/certificate/QBTV8WLKBQ76",
    linkedIn:
      "https://www.linkedin.com/posts/khaledhm_google-technical-support-fundamentals-activity-7105627857451716608-Egyn?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "IBM",
    image: reactCertif,
    date: "9/23/2023",
    about: "Developing Front-end Apps With React",
    link: "https://www.coursera.org/account/accomplishments/certificate/Z4EL85QRYYCH",
    linkedIn: "#",
  },
  {
    title: "CANVA",
    image: canvaCertif,
    date: "9/22/2023",
    about: "Canva Desings Certificate",
    link: "#",
    linkedIn: "#",
  },
]

export default function Certificates() {
  return (
    <>
      <br />
      <Typography ml="20px" variant="h4" gutterBottom>
        Certificates
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
          {CertificateData.map((certificate, index) => (
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
              <CertificateCard
                title={certificate.title}
                date={certificate.date}
                image={certificate.image}
                about={certificate.about}
                link={certificate.link}
                linkedIn={certificate.linkedIn}
              />
            </div>
          ))}
        </Box>
      </Container>
    </>
  )
}
