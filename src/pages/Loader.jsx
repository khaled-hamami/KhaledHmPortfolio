import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import RingLoader from "react-spinners/RingLoader"

export default function Loader({ loading }) {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#0a0a0a" : "#fff",
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
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  )
}
