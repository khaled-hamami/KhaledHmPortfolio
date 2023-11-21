import React, { useEffect, useState } from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import Logo from "../assets/favicon.webp"
import { Button, Typography } from "@mui/material"
import AllInclusiveIcon from "@mui/icons-material/AllInclusive"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { useSelector } from "react-redux"
import "../styles/index.css"

export default function CertificateCard({
  title,
  date,
  image,
  about,
  link,
  linkedIn,
  backgroundImage,
  smallImage,
  platform,
  verifiable,
  postedOnLinked,
  avatar,
}) {
  const { darkMode } = useSelector((state) => state.darkMode)
  //lazy load images with blur placeholder background

  const [highResImage, setHighResImage] = useState(null)
  const [certificateImageLoaded, setCertificateImageLoaded] = useState(false)

  useEffect(() => {
    // Load the high-resolution image asynchronously
    const img = new Image()
    img.src = image
    img.onload = () => {
      setHighResImage(img.src)
      setCertificateImageLoaded(true)
    }
  }, [image])

  return (
    <Card
      className={`
      ${darkMode ? "certificateCardDarkModeAnimation" : "certificateCardLightModeAnimation"}
      ${certificateImageLoaded ? "certificateCard certificateImageLoaded" : "certificateCard"}
        `}
      sx={{
        width: { xs: "350px", sm: "500px" },
        height: "500px",
        border: "1px solid #560085",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "65px",
        position: "relative",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "5px 5px 10px 2px rgba(120, 0, 255, 0.5)",
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="avatar" src={avatar} alt="Logo Image" />}
        action={<Typography fontWeight="600">{date}</Typography>}
        title={title}
        subheader={about}
        titleTypographyProps={{
          fontSize: { xs: ".9rem", md: "1rem" },
          textShadow: "none",
          fontWeight: "600",
        }}
        subheaderTypographyProps={{
          fontSize: { xs: ".8rem", md: ".9rem" },
          textShadow: "none",
          fontWeight: "600",
        }}
      />
      <div className="blured" style={{ backgroundImage: backgroundImage }}>
        <CardMedia
          height={307}
          component="img"
          image={highResImage || smallImage}
          alt="Certificate card"
          loading="lazy"
          sx={{
            borderRadius: "5px",
            boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.2)", // Adjust values for shadow
            background: highResImage || smallImage,
          }}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: highResImage != null ? "blur(0px)" : "blur(5px)",
          }}
        />
      </div>
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          endIcon={<AllInclusiveIcon />}
          sx={{
            fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
            mr: "10px",
            borderRadius: "20px 0 20px 0",
            fontWeight: "bold",
            "&:hover": { scale: "1.05" },
          }}
          href={link}
          target="_blank"
          disabled={!verifiable}
        >
          VERIFY
        </Button>
        {/*small popup to inform that the site link has been copied*/}
        <Button
          endIcon={<LinkedInIcon />}
          variant="contained"
          sx={{
            borderRadius: "20px 0 20px 0",
            fontWeight: "bold",
            "&:hover": { scale: "1.02" },
            fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
            mr: "10px",
          }}
          href={linkedIn}
          target="_blank"
          disabled={!postedOnLinked}
        >
          {platform}
        </Button>
      </CardActions>
    </Card>
  )
}
