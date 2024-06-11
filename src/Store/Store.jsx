// import { configureStore } from "@reduxjs/toolkit";
// import React from "react";
// import UserSlice from "../SignInTab/UserSlice";

// const Store = configureStore({
//   reducer: {
//     user: UserSlice.reducer,
//   },
// });

// export default Store;

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../SignInTab/UserSlice";
import BlogSlice from "../BlogTab/BlogSlice";

export const Store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    blog: BlogSlice.reducer,
  },
});

export default Store;
