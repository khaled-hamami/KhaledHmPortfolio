import { Box, Container, Typography } from "@mui/material"
import CertificateCard from "../components/CertificateCard"
import googleCertif from "../assets/images/certif1.webp"
import reactCertif from "../assets/images/certif2.webp"
import canvaCertif from "../assets/images/certif3.webp"
import googleCertifSmall from "../assets/images/certif1-small.webp"
import reactCertifSmall from "../assets/images/certif2-small.webp"
import canvaCertifSmall from "../assets/images/certif3-small.webp"

const CertificateData = [
  {
    title: "GOOGLE",
    image: googleCertif,
    smallImage: googleCertifSmall,
    date: "9/07/2023",
    about: "Technical Support Fundamentals",
    link: "https://www.coursera.org/account/accomplishments/certificate/QBTV8WLKBQ76",
    linkedIn:
      "https://www.linkedin.com/posts/khaledhm_google-technical-support-fundamentals-activity-7105627857451716608-Egyn?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "IBM",
    image: reactCertif,
    smallImage: reactCertifSmall,
    date: "9/23/2023",
    about: "Developing Front-end Apps With React",
    link: "https://www.coursera.org/account/accomplishments/certificate/Z4EL85QRYYCH",
    linkedIn: "#",
  },
  {
    title: "CANVA",
    image: canvaCertif,
    smallImage: canvaCertifSmall,
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
                smallImage={certificate.smallImage}
              />
            </div>
          ))}
        </Box>
      </Container>
    </>
  )
}
