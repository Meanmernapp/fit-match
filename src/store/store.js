import { combineReducers, configureStore } from "@reduxjs/toolkit";
// add more slice here

import adminReducer from "@/services/admin/adminSlice";
import authReducer, { logoutAll } from "@/services/auth/authSlice";
import clientReducer from "@/services/client/clientSlice";
import commonReducer from "@/services/common/commonSlice";
import trainerReducer from "@/services/trainer/trainerSlice";

// Define the root reducer
const appReducer  = combineReducers({
  authSlice: authReducer ,
  adminSlice: adminReducer,
  clientSlice: clientReducer,
  commonSlice: commonReducer,
  trainerSlice: trainerReducer,

});

const rootReducer = (state, action) => {
  
  if (action.type === logoutAll.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
