import { Box } from "@mui/material"
import RingLoader from "react-spinners/RingLoader"

export default function Loader({ loading }) {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RingLoader
        color={"#be33f5"}
        loading={loading}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  )
}
