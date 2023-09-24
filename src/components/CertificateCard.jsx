import React, { useState } from "react"
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
import "../styles/index.css"

export default function CertificateCard({ title, date, image, about, link, linkedIn }) {
  return (
    <Card
      sx={{
        width: { xs: "300px", sm: "500px", md: "900px" },
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
        avatar={<Avatar aria-label="avatar" src={Logo} />}
        action={<Typography fontWeight="600">{date}</Typography>}
        title={title}
        subheader={about}
      />
      <CardMedia
        height={307}
        component="img"
        image={image}
        alt="Paella dish"
        loading="lazy"
        sx={{
          borderRadius: "5px",
          boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.2)", // Adjust values for shadow
        }}
      />
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
        >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  )
}
