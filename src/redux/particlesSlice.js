import { createSlice } from "@reduxjs/toolkit";

const particlesSlice = createSlice({
  name: "particles",
  initialState: { particlesVisible: true },
  reducers: {
    setParticlesTrue: (state) => {
      state.particlesVisible = true;
    },
    setParticlesFalse: (state) => {
      state.particlesVisible = false;
    },
  },
});

export default particlesSlice.reducer;
export const { particlesVisible, setParticlesTrue, setParticlesFalse } = particlesSlice.actions;
