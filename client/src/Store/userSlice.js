import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user',
  initialState : {
   userData : null
  },
  reducers : {
    addUserData : (state,action) => {
      state.userData = action.payload
    },
    clearUserData : (state) =>{
      state.userData = null
    }
  }
})

export const{addUserData,clearUserData} = userSlice.actions
export default userSlice.reducer;