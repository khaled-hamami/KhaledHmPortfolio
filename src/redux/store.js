import { configureStore } from "@reduxjs/toolkit"
import settingsReducer from "./settingsSlice"
import darkModeReducer from "./darkModeSlice"
import particlesReducer from "./particlesSlice"
export default configureStore({
  reducer: {
    settings: settingsReducer,
    darkMode: darkModeReducer,
    particles: particlesReducer,
  },
})
