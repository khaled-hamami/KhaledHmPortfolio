import { Box, Container, Skeleton } from "@mui/material"

export default function AboutPageLoading() {
  const mappedOverArray = [1, 2, 3, 4, 5]
  return (
    <>
      <br />
      <Skeleton animation="wave" variant="text" ml="20px" width="230px" height="75px" />
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
          {mappedOverArray.map((index) => {
            return (
              <Box
                key={index}
                style={{
                  marginBottom: {
                    xs: "50px",
                    sm: "60px",
                    md: "70px",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "70%", sm: "550px", md: "400px", lg: "560px" },
                    height: { sm: "300px", md: "300px", lg: "460px" },
                    border: "1px solid #560085",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: "65px",
                    position: "relative",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "5px 5px 10px 2px rgba(120, 0, 255, 0.5)",
                    color: "contrast.main",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Skeleton animation="wave" variant="circular" width="50px" height="50px" />
                    <Skeleton animation="wave" variant="text" width="40%" height="15px" />
                    <Skeleton animation="wave" variant="circular" width="25px" height="25px" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      sx={{
                        width: { xs: "90%", sm: "450px", md: "350px", lg: "560px" },
                        height: { xs: "300px", md: "150px", lg: "300px" },
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Skeleton
                        animation="wave"
                        variant="text"
                        sx={{
                          width: "125px",
                          height: "38px",
                          //   width: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
                          //   height: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
                          mr: "10px",
                        }}
                      />
                      <Skeleton
                        animation="wave"
                        variant="text"
                        sx={{
                          width: "125px",
                          height: "38px",
                          //   width: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
                          //   height: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
                          mr: "10px",
                        }}
                      />
                    </div>
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{
                        width: "125px",
                        height: "38px",
                        // width: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
                        // height: { xs: ".6rem", sm: ".7rem", md: ".8rem", lg: ".85rem" },
                        mr: "10px",
                      }}
                    />
                  </div>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Container>
    </>
  )
}
