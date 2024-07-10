import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user',
  initialState : {
   userData : null,
   status : false
  },
  reducers : {
    addUserData : (state,action) => {
      state.userData = action.payload
      state.status = true
    },
    clearUserData : (state) =>{
      state.userData = null
      state.status = false
    }
  }
})

export const{addUserData,clearUserData} = userSlice.actions
export default userSlice.reducer;