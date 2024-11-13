import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Subscription {
  subscriptionId: string;
  subscriptionStatus: "active" | "inactive";
  startDate: Date;
  endDate: Date;
}

interface Property {
  id: string;
  domain: string;
  name: string;
  status: "published" | "drafted";
}

interface IPropertyManager {
  _id: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  email: string;
  phone?: string;
  password?: string;
  city:string;
  linkedinUrl:string;
  activeSubscriptions: Subscription[];
  properties?: Property[];
  isVerified: boolean;
  verificationCode: string;
  verificationCodeExpiration: Date;
  resetPasswordToken?: string;
  resetPasswordTokenExpiration?: Date;
  isProfileSet: boolean;
}

interface PropertyManagerState {
  propertyManager: IPropertyManager | null;
  loading: boolean;
  error: string | null;
}

const initialState: PropertyManagerState = {
  propertyManager: null,
  loading: true,
  error: null,
};

const propertyManagerSlice = createSlice({
  name: "propertyManager",
  initialState,
  reducers: {
    setPropertyManager: (
      state,
      action: PayloadAction<IPropertyManager | null>
    ) => {
      state.propertyManager = action.payload;
      state.loading = false;
      state.error = null;
    },

    clearPropertyManager: (state) => {
      state.propertyManager = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPropertyManager,
  clearPropertyManager,
  setLoading,
  setError,
} = propertyManagerSlice.actions;

export default propertyManagerSlice.reducer;
