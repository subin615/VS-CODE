import { configureStore } from "@reduxjs/toolkit"
import regis from './regis-slice'

const store = configureStore({
    reducer: {
        regis: regis
    }
})

export default store    