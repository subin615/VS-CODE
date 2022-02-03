import { configureStore } from "@reduxjs/toolkit"
import registerSlice from './regis-slice'

const store = configureStore({
    reducer: {
        regis: registerSlice,
    }
})

export default store    