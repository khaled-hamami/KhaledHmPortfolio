import { createSlice } from "@reduxjs/toolkit"

const settingsSlice = createSlice({
  name: "settings",
  initialState: { settingsVisible: false },
  reducers: {
    setSettingsVisible: (state) => {
      state.settingsVisible = !state.settingsVisible
    },
  },
})

export default settingsSlice.reducer
export const { setSettingsVisible } = settingsSlice.actions
