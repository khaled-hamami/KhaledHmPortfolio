import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Logo from "../assets/favicon.webp"
import LaunchIcon from "@mui/icons-material/Launch"
import { Alert, Button } from "@mui/material"
import GitHub from "@mui/icons-material/GitHub"
import copyToClipboard from "../utils/CopyToClipboard"
import CloseIcon from "@mui/icons-material/Close"
import "../styles/index.css"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function ProjectCard({ title, description, image, about, link, sourceCode }) {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  //popup state
  const [open, setOpen] = useState(false)

  return (
    <Card
      sx={{
        border: "1px solid #560085",
        width: "100%",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "600px",
        boxShadow: "6px 6px 8px rgba(0, 0, 0, 0.4)", // Adjust values for shadow
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="avatar" src={Logo} />}
        action={
          <IconButton aria-label="Github" target="_blank" href={sourceCode}>
            <GitHub sx={{ color: "primary.main" }} />
          </IconButton>
        }
        title={title}
        subheader={about}
      />
      <CardMedia
        component="img"
        height="194"
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
          endIcon={<LaunchIcon />}
          sx={{ mr: "10px", borderRadius: "20px 0 20px 0 " }}
          href={link}
          target="_blank"
        >
          VISIT
        </Button>
        {/*small popup to inform that the site link has been copied*/}
        {open && (
          <div>
            <Collapse in={open} sx={{ mx: "10px" }}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false)
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Site link has been Copied
              </Alert>
            </Collapse>
          </div>
        )}
        <Button
          variant="contained"
          sx={{ borderRadius: "20px 0 20px 0 " }}
          endIcon={<ShareIcon />}
          onClick={() => {
            copyToClipboard(link)
            setOpen(true)
          }}
        >
          SHARE
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ width: "100%" }}>
        <CardContent>
          <hr
            style={{
              borderTop: "3px double #8c8b8b",
            }}
          />
          {description.map((item, index) => {
            return (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  m: "0 10px 10px 10px",
                  fontSize: "11px",
                  fontWeight: "bold",
                  background: "linear-gradient(to left, #a200ff, #5d2bff, #3498db) ",
                  color: "contrast.reverse",
                  "&:hover": { color: "contrast.main" },
                }}
              >
                {item}
              </Button>
            )
          })}
        </CardContent>
      </Collapse>
    </Card>
  )
}
