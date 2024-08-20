import { apiInstance } from "@/config/AxiosInstances";
import { admin, adminUser, adminUserEndpoint, customerRequests, customerRequestsEndpoint } from "@/constants/admin";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// admin user (done)
export const AdminUsers = createAsyncThunk(
  `${admin}/${adminUser}`,
  async () => {
    const response = await apiInstance.get(`${adminUserEndpoint}`);
    const { data, status } = response;
    return { data, status };
  }
);

// Customer Requests
export const CustomerRequests = createAsyncThunk(
  `${admin}/${customerRequests}`,
  async () => {
    const response = await apiInstance.get(`${customerRequestsEndpoint}`);
    const { data, status } = response;
    return { data, status };
  }
);


const initialState = {
  adminUsers: [],
  customerRequests:[]
};
const adminSlice = createSlice({
  name: admin,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AdminUsers.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.adminUsers = action?.payload?.data;
      }
      
    });
    builder.addCase(CustomerRequests.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.customerRequests = action?.payload?.data;
      }
      
    });
  },
});

export default adminSlice.reducer;
