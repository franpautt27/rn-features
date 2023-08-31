import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {ColorSchemeName} from 'react-native'

export interface ThemeState {
  value: ColorSchemeName
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
    setTheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.value = action.payload
  },
  },
})

// Action creators are generated for each case reducer function
export const { setLightTheme, setDarkTheme, setTheme } = themeSlice.actions

export default themeSlice.reducer