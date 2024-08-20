import { apiInstance } from "@/config/AxiosInstances";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Logout
export const LogOut = createAsyncThunk(`auth/logOut`, async () => {
  const response = await apiInstance.get("/api/Auth/Logout");
  const { data, status } = response;
  return { data, status };
});
// register APi
export const Register = createAsyncThunk(
  `auth/register`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/Auth/Register`, params);
    const { data, status } = response;
    return { data, status };
  }
);
// confirm Email APi
export const ConfirmEmail = createAsyncThunk(
  `auth/confirmEmail`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/Auth/ConfirmEmail`, params);
    const { data, status } = response;
    return { data, status };
  }
);

export const ForgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (params, thunkAPI) => {
    try {
      const response = await apiInstance.post(
        "/api/Auth/ForgotPassword",
        params
      );
      const { data, status } = response;
      return { data, status };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// reset Password APi
export const ResetPassword = createAsyncThunk(
  `auth/resetPassword}`,
  async (params, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/Auth/ResetPassword`, params);
    const { data, status } = response;
    return { data, status };
  }
);
// resend Verification Email APi
export const ResendVerificationEmail = createAsyncThunk(
  `auth/resendVerificationEmail`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(
      `/api/Auth/ResendVerificationEmail`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Get User By Id
export const GetUserById = createAsyncThunk(
  `auth/getUserById`,
  async (params) => {
    const response = await apiInstance.get(`/api/User/get/${params}`);
    const { data, status } = response;
    return { data, status };
  }
);
// Update User
export const UpdateUser = createAsyncThunk(
  `auth/updateUser`,
  async (params, { rejectWithValue }) => {
    const response = await apiInstance.put(`/api/User/update`, params);
    const { data, status } = response;
    return { data, status };
  }
);
// update Profile Photo
export const UpdateProfilePhoto = createAsyncThunk(
  `auth/updateProfilePhoto`,
  async (params, { rejectWithValue }) => {
    const response = await apiInstance.put(
      `/api/User/updateProfilePhoto`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// get profile photo
export const GetProfileLogo = createAsyncThunk(
  `auth/getProfileLogo`,
  async (params) => {
    const response = await apiInstance.get(
      `/api/User/getProfilePhoto/${params}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Update Company Logo
export const UpdateCompanyLogo = createAsyncThunk(
  `auth/updateCompanyLogo`,
  async (params, { rejectWithValue }) => {
    const response = await apiInstance.put(
      `/api/User/updateCompanyLogo`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// get company loago
export const GetCompanyLogo = createAsyncThunk(
  `auth/getCompanyLogo`,
  async (params) => {
    const response = await apiInstance.get(
      `/api/User/getCompanyLogo/${params}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Delete User
export const DeleteUser = createAsyncThunk(
  `auth/deleteUser`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(
      `/api/User/updateCompanyLogo`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// user Role By Id
export const UserRoleById = createAsyncThunk(`auth/userRoleById`, async () => {
  const response = await apiInstance.get(`/api/User/updateCompanyLogo`);
  const { data, status } = response;
  return { data, status };
});

// add User Role
export const AddUserRole = createAsyncThunk(
  `auth/addUserRole`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/UserRoles/Add`, params);
    const { data, status } = response;
    return { data, status };
  }
);

// Delete User Role
export const DeleteUserRole = createAsyncThunk(
  `auth/deleteUserRole`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/UserRoles/Delete`, params);
    const { data, status } = response;
    return { data, status };
  }
);

// Get Role
export const GetRole = createAsyncThunk(`auth/getRole`, async () => {
  const response = await apiInstance.get(`/api/Roles/get`);
  const { data, status } = response;
  return { data, status };
});

// add  Role
export const AddRole = createAsyncThunk(
  `auth/addRole`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/Roles/AddRole`, params);
    const { data, status } = response;
    return { data, status };
  }
);

// update Role
export const UpdateRole = createAsyncThunk(
  `auth/updateRole`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/Roles/UpdateRole`, params);
    const { data, status } = response;
    return { data, status };
  }
);

// delete Role
export const DeleteRole = createAsyncThunk(
  `auth/deleteRole`,
  async ({ params }, { rejectWithValue }) => {
    const response = await apiInstance.post(`/api/Roles/Remove`, params);
    const { data, status } = response;
    return { data, status };
  }
);

const initialState = {
  user: {},
  getUserById: {},
  updateUser: {},
  updateProfilePhoto: {},
  updateCompanyLogo: {},
  deleteUser: {},
  userRoleById: {},
  addUserRole: {},
  deleteUserRole: {},
  getRole: [],
  addRole: {},
  updateRole: {},
  deleteRole: {},
  register: {},
  confirmEmail: {},
  forgetPassword: {},
  resetPassword: {},
  resendVerificationEmail: {},
  getCompanyLogo: {},
  getProfileLogo: {},
};
const authUserSlice = createSlice({
  name: "authSliceKey",
  initialState,
  reducers: {
    logoutAll: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(GetRole.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getRole = action?.payload?.data;
      }
    });
    builder.addCase(Register.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.register = action?.payload?.data;
      }
    });
    builder.addCase(ConfirmEmail.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.confirmEmail = action?.payload?.data;
      }
    });
    builder.addCase(ForgetPassword.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.forgetPassword = action?.payload?.data;
      }
    });
    builder.addCase(ResetPassword.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.resetPassword = action?.payload?.data;
      }
    });
    builder.addCase(ResendVerificationEmail.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.resendVerificationEmail = action?.payload?.data;
      }
    });
    builder.addCase(GetUserById.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getUserById = action?.payload?.data;
      }
    });
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.updateUser = Date.now();
      }
    });
    builder.addCase(UpdateProfilePhoto.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.updateProfilePhoto = Date.now();
      }
    });
    builder.addCase(UpdateCompanyLogo.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.updateCompanyLogo = Date.now();
      }
    });
    builder.addCase(DeleteUser.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.deleteUser = action?.payload?.data;
      }
    });
    builder.addCase(UserRoleById.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.userRoleById = action?.payload?.data;
      }
    });
    builder.addCase(AddUserRole.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.addUserRole = action?.payload?.data;
      }
    });
    builder.addCase(DeleteUserRole.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.deleteUserRole = action?.payload?.data;
      }
    });
    builder.addCase(AddRole.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.addRole = action?.payload?.data;
      }
    });
    builder.addCase(DeleteRole.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.deleteRole = action?.payload?.data;
      }
    });
    builder.addCase(GetCompanyLogo.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getCompanyLogo = action?.payload?.data;
      }
    });
    builder.addCase(GetProfileLogo.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getProfileLogo = action?.payload?.data;
      }
    });
  },
});

export const { logoutAll } = authUserSlice.actions;

export default authUserSlice.reducer;
