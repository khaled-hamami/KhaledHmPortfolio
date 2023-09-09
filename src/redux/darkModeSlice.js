import { createSlice } from "@reduxjs/toolkit"

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: { darkMode: false },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export default darkModeSlice.reducer
export const { setDarkMode } = darkModeSlice.actions
