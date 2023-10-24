import { Container, Skeleton } from "@mui/material"

export default function ResumeSkeleton() {
  return (
    <>
      <br />
      <Skeleton variant="text" ml="20px" width="230px" height="75px" />

      <br />
      <hr />
      <hr />
      <br />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            width: "230px",
            height: "75px",
            mb: "100px",
          }}
        />
        <Skeleton
          variant="rectangular"
          width="900px"
          height="1280px"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Container>
    </>
  )
}
