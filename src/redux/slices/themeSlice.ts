import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  value: "light" | "dark"
 }

const initialState: ThemeState = {
  value: "light",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.value = "dark"
    },
    setLightTheme: (state) => {
        state.value = "light"
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLightTheme, setDarkTheme } = themeSlice.actions

export default themeSlice.reducer