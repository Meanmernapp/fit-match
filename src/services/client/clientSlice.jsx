import { apiInstance } from "@/config/AxiosInstances";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Get all user Request APi (done)
export const GetAllUserRequest = createAsyncThunk(
  `client/getAllUserRequest`,
  async (userId) => {
  
    const response = await apiInstance.get(
      `/api/Customer/GetAllUserRequests/${userId}`
    );

    const { data, status } = response;
    return { data, status };
  }
);
// Delete Request Api (done)
export const DeleteRequest = createAsyncThunk(
  `client/deleteRequest`,
  async ({ params }, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.delete(
      `/api/Customer/DeleteRequest/${params?.id}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Create Request Api (done)
export const CreateRequest = createAsyncThunk(
  `client/createRequest`,
  async ({ params }, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(
      `/api/Customer/CreateRequest`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Update Request Api (done)
export const UpdateRequest = createAsyncThunk(
  `client/updateRequest`,
  async ({ params, RequestId }, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(
      `/api/Customer/UpdateRequest/${RequestId}`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Update customer request status   (done)
export const UpdateCustomerRequestStatus = createAsyncThunk(
  `client/updateCustomerRequestStatus`,
  async ({ params }, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(
      `/api/Customer/UpdateCustomerRequestStatus`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);
// Send Requet To Trainers Api (done)
export const SendRequetToTrainers = createAsyncThunk(
  `client/sendRequestToTrainers`,
  async ({ params }, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(
      `/api/Customer/SendRequestToTrainers`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

//Get Selected trainer for request
export const GetSelectedTrainersForRequest = createAsyncThunk(
  `client/getSelectedTrainersForRequest`,
  async (userId) => {
    const response = await apiInstance.get(
      `/api/Customer/GetSelectedTrainersForRequest/${userId}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

//Get Matched trainer for request
export const GetMatchedTrainersForRequest = createAsyncThunk(
  `client/getMatchedTrainersForRequest`,
  async (params) => {
    const response = await apiInstance.get(
      `/api/Customer/GetMatchedTrainersForRequest/${params?.reqId}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

const initialState = {
  getAllUserRequest: [],
  createRequest: {},
  deleteRequest: {},
  getMatchedTrainersForRequest: [],
  getSelectedTrainersForRequest: [],
  sendRequestToTrainers: {},
  updateCustomerRequestStatus: {},
  updateRequest: {},
 
};
const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    resetGetMatchedTrainersForRequest: (state) => {
      state.getMatchedTrainersForRequest = [];
    },
    resetUpdateRequest: (state) => {
      state.updateRequest = {};
    },
    resetCreateRequest: (state) => {
      state.createRequest = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllUserRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getAllUserRequest = action?.payload?.data;
      }
    });
    builder.addCase(UpdateCustomerRequestStatus.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.updateCustomerRequestStatus = action?.payload?.data;
        toast.success("Request Closed Successfully");
      } else if (
        action?.payload?.status >= 400 &&
        action?.payload?.status < 500
      ) {
        toast.error(action?.payload?.data);
      }
    });
    builder.addCase(DeleteRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.deleteRequest = action?.payload?.data;
        toast.success("Request Deleted Successfully");
      } else if (
        action?.payload?.status >= 400 &&
        action?.payload?.status < 500
      ) {
        toast.error("Request Deletion Failed: Client Error");
      }
    });
    builder.addCase(CreateRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.createRequest = action?.payload?.data;
        toast.success("Request Created Successfully");
      } else if (
        action?.payload?.status >= 400 &&
        action?.payload?.status < 500
      ) {
        toast.error("Request Created Failed, try again");
      }
    });
    builder.addCase(UpdateRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.updateRequest = action?.payload?.data;
        toast.success("Request Update Successfully");
      } else if (
        action?.payload?.status >= 400 &&
        action?.payload?.status < 500
      ) {
        toast.error("Request Update Failed, try again");
      }
    });
    builder.addCase(SendRequetToTrainers.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.sendRequestToTrainers = Date.now();
        toast.success("Request Sent to Trainer Successfully");
      } else if (
        action?.payload?.status >= 400 &&
        action?.payload?.status < 500
      ) {
        toast.error("Request Sent Failed, try again");
      }
    });
    builder.addCase(GetMatchedTrainersForRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getMatchedTrainersForRequest = action?.payload?.data;
      }
    });
 
  },
});

export const {
  resetGetMatchedTrainersForRequest,
  resetUpdateRequest,
  resetCreateRequest,
} = clientSlice.actions;

export default clientSlice.reducer;
