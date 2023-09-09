import { createSlice } from "@reduxjs/toolkit"

const particlesSlice = createSlice({
  name: "particles",
  initialState: { particles: true },
  reducers: {
    setParticlesTrue: (state) => {
      state.particles = true
    },
    setParticlesFalse: (state) => {
      state.particles = false
    },
  },
})

export default particlesSlice.reducer
export const { setParticlesTrue, setParticlesFalse } = particlesSlice.actions
