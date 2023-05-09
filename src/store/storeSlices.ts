import { PayloadAction, createSlice } from "@reduxjs/toolkit"

// Define a type for the slice state
interface CounterState {
  wallet: string,
  GenerateNumberModal: boolean,
  DrawResultModal: boolean,
}

// Define the initial state using that type
const initialState: CounterState = {
  wallet: '',
  GenerateNumberModal: false,
  DrawResultModal: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<string>) => {
      state.wallet = action.payload
    },
    setGenerateNumberModal: (state, action: PayloadAction<boolean>) => {
      state.GenerateNumberModal = action.payload;
    },
    setDrawResultModal: (state, action: PayloadAction<boolean>) => {
      state.DrawResultModal = action.payload;
    }
  }
})

export const { setWallet, setGenerateNumberModal, setDrawResultModal } = counterSlice.actions

export default counterSlice.reducer