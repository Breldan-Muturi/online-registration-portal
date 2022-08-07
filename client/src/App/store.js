import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import customApplicationReducer from "../features/application/customApplicationSlice";
import sideReducer from "../features/sidebar/sideSlice";
import organizationReducer from "../features/organization/organizationSlice";
import sessionReducer from "../features/session/sessionSlice";
import topicReducer from "../features/topic/topicSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    customApplication: customApplicationReducer,
    side: sideReducer,
    session: sessionReducer,
    organization: organizationReducer,
    topic: topicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
