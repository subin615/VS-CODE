import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '.';
interface RegisterDetails {
    showGST: boolean;
    userType?: string;
}
interface RegisterData {
    register: RegisterDetails;
}
const initialState: RegisterData = {
    register: {
        showGST: false
    }
}
const register = createSlice({
    name: 'regis',
    initialState: initialState,
    reducers: {
        isPersonal(state, action: PayloadAction<string>) {
            const TYPE = action.payload
            if (TYPE === "personal") {
                state.register = {
                    ...state.register,
                    showGST: false,
                }
            } else {
                state.register = {
                    ...state.register,
                    showGST: true,
                }
            }
        }
    }
})

type RootState = ReturnType<typeof store.getState>
export const selectRegis = (state: RootState) => state.regis.register;
export const regisAction = register.actions;

export default register.reducer