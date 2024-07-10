import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user',
  initialState : {
   status : false
  },
  reducers : {
    addUserData : (state,action) => {
      state.status = action.payload
    },
    clearUserData : (state) =>{
      state.status = false
    }
  }
})

export const{addUserData,clearUserData} = userSlice.actions
export default userSlice.reducer;