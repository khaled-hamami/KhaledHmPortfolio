import { configureStore } from "@reduxjs/toolkit"
import settingsReducer from "./settingsSlice"
import darkModeReducer from "./darkModeSlice"
import particlesInteractivityReducer from "./particlesInteractivitySlice"
import particlesReducer from "./particlesSlice"
export default configureStore({
  reducer: {
    settings: settingsReducer,
    darkMode: darkModeReducer,
    particlesInteractivity: particlesInteractivityReducer,
    particles: particlesReducer,
  },
})
