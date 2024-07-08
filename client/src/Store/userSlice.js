import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user',
  initialState : {
   userData : null
  },
  reducers : {
    addUserData : (state,action) => {
      state.userData = action.payload
    }
  }
})

export const{addUserData} = userSlice.actions
export default userSlice.reducer;