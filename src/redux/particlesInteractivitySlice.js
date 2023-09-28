import { createSlice } from "@reduxjs/toolkit"

const particlesInteractivity = createSlice({
  name: "particlesInteractivity",
  initialState: { particlesInteractivity: true },
  reducers: {
    setParticlesInteractivityTrue: (state) => {
      state.particlesInteractivity = true
    },
    setParticlesInteractivityFalse: (state) => {
      state.particlesInteractivity = false
    },
  },
})

export default particlesInteractivity.reducer
export const { setParticlesInteractivityTrue, setParticlesInteractivityFalse } = particlesInteractivity.actions
