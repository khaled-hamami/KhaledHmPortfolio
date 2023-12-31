import { configureStore } from "@reduxjs/toolkit"
import settingsReducer from "./settingsSlice"
import darkModeReducer from "./darkModeSlice"
import particlesInteractivityReducer from "./particlesInteractivitySlice"
import particlesBehaviourReducer from "./particlesBehaviourSlice"
import particlesReducer from "./particlesSlice"
export default configureStore({
  reducer: {
    settings: settingsReducer,
    darkMode: darkModeReducer,
    particlesInteractivity: particlesInteractivityReducer,
    particlesBehaviour: particlesBehaviourReducer,
    particles: particlesReducer,
  },
})
