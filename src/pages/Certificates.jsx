import { Box, Container, Typography } from "@mui/material"
import CertificateCard from "../components/CertificateCard"
import googleCertif from "../assets/images/certif1.webp"
import googleCertif2 from "../assets/images/certif4.webp"
import reactCertif from "../assets/images/certif2.webp"
import canvaCertif from "../assets/images/certif3.webp"
import googleCertifSmall from "../assets/images/certif1-small.webp"
import googleCertifSmall2 from "../assets/images/certif4-small.webp"
import hakathonCertif from "../assets/images/certif5.webp"
import hakathonCertifSmall from "../assets/images/certif5-small.webp"
import reactCertifSmall from "../assets/images/certif2-small.webp"
import canvaCertifSmall from "../assets/images/certif3-small.webp"
import googleAvatar from "../assets/avatars/google.webp"
import ibmAvatar from "../assets/avatars/ibm.webp"
import awsAvatar from "../assets/avatars/aws.webp"
import otcAvatar from "../assets/avatars/otc.webp"
import canvaAvatar from "../assets/avatars/canva.webp"
import { useEffect } from "react"
import { motion } from "framer-motion"

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
    platform: "linkedin",
    verifiable: true,
    postedOnLinked: true,
    avatar: googleAvatar,
  },

  {
    title: "IBM",
    image: reactCertif,
    smallImage: reactCertifSmall,
    date: "9/23/2023",
    about: "Developing Front-end With React",
    link: "https://www.coursera.org/account/accomplishments/certificate/Z4EL85QRYYCH",
    linkedIn:
      "https://www.linkedin.com/posts/khaledhm_developing-front-end-apps-with-react-activity-7113615874514644993-nje7?utm_source=share&utm_medium=member_desktop",
    platform: "linkedin",
    verifiable: true,
    postedOnLinked: true,
    avatar: ibmAvatar,
  },
  {
    title: "GOOGLE",
    image: googleCertif2,
    smallImage: googleCertifSmall2,
    date: "10/15/2023",
    about: "The Bits and Bytes of Networking",
    link: "https://www.coursera.org/account/accomplishments/certificate/F8FXVQJXUFQA",
    linkedIn: "https://www.linkedin.com/feed/update/urn:li:activity:7119435330507661313/",
    platform: "linkedin",
    verifiable: true,
    postedOnLinked: true,
    avatar: googleAvatar,
  },
  {
    title: "ORANGE",
    image: hakathonCertif,
    smallImage: hakathonCertifSmall,
    date: "12/09/2023",
    about: "Hakathon Wining Certificate",
    link: "#",
    linkedIn: "#",
    platform: "linkedin",
    verifiable: false,
    postedOnLinked: true,
    avatar: otcAvatar,
  },
  {
    title: "CANVA",
    image: canvaCertif,
    smallImage: canvaCertifSmall,
    date: "9/22/2023",
    about: "Canva Desings Certificate",
    link: "#",
    linkedIn: "#",
    platform: "linkedin",
    verifiable: false,
    postedOnLinked: false,
    avatar: canvaAvatar,
  },
]

export default function Certificates() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
            /*the div is for isolating the state so it deosnt become shared*/
            <motion.div
              initial={{ opacity: 0, translateX: index % 2 == 0 ? -100 : 100 }}
              animate={{ opacity: 1, translateX: 0, transition: { delay: index * 0.05 + 0.5 } }}
              transition={{ duration: 0.5 }}
              key={index}
              style={{
                marginBottom: {
                  xs: "50px",
                  sm: "60px",
                  md: "70px",
                },
                overflow:'hidden'
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
                platform={certificate.platform}
                verifiable={certificate.verifiable}
                postedOnLinked={certificate.postedOnLinked}
                avatar={certificate.avatar}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </>
  )
}
