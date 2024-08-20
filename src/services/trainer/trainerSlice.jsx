import { apiInstance } from "@/config/AxiosInstances";

import {
  addCredit,
  addCreditEndpoint,
  creditAddedSuccess,
  creditAddedSuccessEndpoint,
  getAllPriceIds,
  getAllTrainerRequest,
  getAllTrainerRequestEndpoint,
  getTrainerCredit,
  getTrainerCreditEndpoint,
  getTrainerProfileEndpoint,
  regiterTrainerProfile,
  regiterTrainerProfileEndpoint,
  responseToRequest,
  responseToRequestEndpoint,
  trainer
} from "@/constants/trainer";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { setLoading } from "../common/commonSlice";

// Register Trainer Profile  (done)
export const RegisterTrainerProfile = createAsyncThunk(
  `${trainer}/${regiterTrainerProfile}`,
  async (params, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(
      `${regiterTrainerProfileEndpoint}/${params?.userId}`,
      params?.data
    );
    const { data, status } = response;
    return { data, status };
  }
);
// GetAllTrainerRequest  (done)
export const GetAllTrainerRequest = createAsyncThunk(
  `${trainer}/${getAllTrainerRequest}`,
  async (params) => {
    const response = await apiInstance.get(
      `${getAllTrainerRequestEndpoint}/${params}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Get Trainer Profile  (done)
// export const GetTrainerProfile = createAsyncThunk(
//   `${trainer}/${getTrainerProfile}`,
//   async (params,{dispatch}) => {
//     dispatch(startLoading())
//     const response = await apiInstance.get(
//       `${getTrainerProfileEndpoint}/${params}`
//     );
//     const { data, status } = response;
//     return { data, status };
//   }
// );
export const GetTrainerProfile = createAsyncThunk(
  "trainer/getTrainerProfile",
  async (params, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await apiInstance.get(
        `${getTrainerProfileEndpoint}/${params}`
      );
      const { data, status } = response;
      dispatch(setLoading(false));

      return { data, status };
    } catch (error) {
      dispatch(setLoading(false));
      throw error;
    }
  }
);
// GetTrainerCredit  (done)
export const GetTrainerCredit = createAsyncThunk(
  `${trainer}/${getTrainerCredit}`,
  async (params) => {
    const response = await apiInstance.get(
      `${getTrainerCreditEndpoint}/${params}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

// AddCredit
export const AddCredit = createAsyncThunk(
  `${trainer}/${addCredit}`,
  async (params, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(`${addCreditEndpoint}`, params);
    const { data, status } = response;
    return { data, status };
  }
);

// GetAllPriceIds
export const GetAllPriceIds = createAsyncThunk(
  `${trainer}/${getAllPriceIds}`,
  async () => {
    const response = await apiInstance.post(`/api/Trainer/GetAllPriceIds`);
    const { data, status } = response;
    return { data, status };
  }
);

// CreditAddedSuccess
export const CreditAddedSuccess = createAsyncThunk(
  `${trainer}/${creditAddedSuccess}`,
  async () => {
    const response = await apiInstance.post(
      `${creditAddedSuccessEndpoint}`
    );
    const { data, status } = response;
    return { data, status };
  }
);

// ResponseToRequest (done)
export const ResponseToRequest = createAsyncThunk(
  `${trainer}/${responseToRequest}`,
  async (params, { rejectWithValue, dispatch }) => {
    const response = await apiInstance.post(
      `${responseToRequestEndpoint}`,
      params
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Update Trainer Profile  (done)
export const UpdateTrainerProfile = createAsyncThunk(
  `${trainer}/updateTrainerProfile`,
  async (params) => {
    const response = await apiInstance.put(
      `/api/Trainer/UpdateTrainerProfile/${params?.trainerId}`,
      params?.data
    );
    const { data, status } = response;
    return { data, status };
  }
);

// Get Customer Contact Details  (done)
export const GetCustomerContactDetails = createAsyncThunk(
  `client/getCustomerContactDetails`,
  async (params) => {
    const response = await apiInstance.get(
      `/api/Trainer/GetCustomerContactDetails/${params?.requestId}/${params?.trainerId}`
    );
    const { data, status } = response;
    return { data, status };
  }
);
const initialState = {
  regiterTrainerProfile: {},
  getAllTrainerRequest: [],
  getTrainerCredit: [],
  addCredit: {},
  getAllPriceIds: {},
  creditAddedSuccess: {},
  responseToRequest: {},
  getTrainerProfile: {},
  updateTrainerProfile: {},
  getCustomerContactDetails: {},
  isCreditSuccess: false,
};
const trainerSlice = createSlice({
  name: trainer,
  initialState,
  reducers: {
    IsCreditSuccess: (state, action) => {
      state.isCreditSuccess = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterTrainerProfile.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.regiterTrainerProfile = Date.now();
      }
    });
    builder.addCase(GetAllTrainerRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getAllTrainerRequest = action?.payload?.data;
      }
    });
    builder.addCase(GetTrainerCredit.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getTrainerCredit = action?.payload?.data;
      }
    });
    builder.addCase(AddCredit.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.addCredit = action?.payload?.data;
      }
    });
    builder.addCase(GetAllPriceIds.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getAllPriceIds = action?.payload?.data;
      }
    });
    builder.addCase(CreditAddedSuccess.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.creditAddedSuccess = action?.payload?.data;
      }
    });
    builder.addCase(ResponseToRequest.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.responseToRequest = Date.now();
      }
    });
    builder.addCase(GetTrainerProfile.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getTrainerProfile = action?.payload?.data;
      }
    });
    builder.addCase(UpdateTrainerProfile.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.updateTrainerProfile = Date.now();
        toast.success("Update Profile Successfully");
      }
    });
    builder.addCase(GetCustomerContactDetails.fulfilled, (state, action) => {
      if (action?.payload?.status >= 200 && action?.payload?.status < 300) {
        state.getCustomerContactDetails = action?.payload?.data;
      }
    });
  },
});

export const { IsCreditSuccess } = trainerSlice.actions;

export default trainerSlice.reducer;
