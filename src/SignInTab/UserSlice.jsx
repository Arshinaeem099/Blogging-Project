// import { createSlice } from '@reduxjs/toolkit'

// const UserSlice = createSlice({
//     name: "user",
//     initialState:{
//         isAuthentication: false,
//         userData: null,
//       },
//     reducers:{
//         Login(state,action){
//             state.isAuthentication = true;
//             state.userData = action.payload;
//         },
//         Logout(state){
//             state.isAuthentication = false;
//             state.userData = null;
//         },
//     },
    
// })
// export default UserSlice;
// export const { Login, Logout } = UserSlice.actions;
// // export const selectUser = (state) => state.user;



import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    Login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    Logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});


export const { Login, Logout } = userSlice.actions;
export const selectAuth = (state) => state.auth;
export  {userSlice};

 
