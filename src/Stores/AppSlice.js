import { createSlice } from "@reduxjs/toolkit"

export const AppSlice = createSlice({
    name:"LanguageAndDarkModeApp",
    initialState: {
        language: 'AZ',
        darkMode: false
    },
    reducers: {
        setLanguage: (state,action) => {
            state.language = action.payload
        },
        setDarkMode: state => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {setLanguage,setDarkMode} = AppSlice.actions;
export default AppSlice.reducer ;