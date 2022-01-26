import { createSlice } from '@reduxjs/toolkit';
const initialState = { showGST: false, selectedAccountType: '' }
const register = createSlice({
    name: 'regis',
    initialState: initialState,
    reducers: {
        handleSelect(state, action) {
            state.selectedAccountType = action.payload
        }
    }
})

export const regisAction = register.actions;

export default register.reducer