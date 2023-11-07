import { createSlice } from "@reduxjs/toolkit"

const particlesBehaviour = createSlice({
  name: "particlesBehaviour",
  initialState: { particlesBehaviour: true },
  reducers: {
    setParticlesBehaviourTrue: (state) => {
      state.particlesBehaviour = true
    },
    setParticlesBehaviourFalse: (state) => {
      state.particlesBehaviour = false
    },
  },
})

export default particlesBehaviour.reducer
export const { setParticlesBehaviourTrue, setParticlesBehaviourFalse } = particlesBehaviour.actions
