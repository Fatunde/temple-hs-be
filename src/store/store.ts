import {
  configureStore,
  Middleware,
  MiddlewareAPI,
  isRejectedWithValue,
  combineReducers,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import authReducer, { logoutUser } from "@/store/slice/auth.slice";
import { templeHsApi } from "@/store/slice/api.slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import toast from "react-hot-toast";
import Capitalize from "@/helpers/capitalize";

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action?.payload?.data?.message?.toLowerCase() === "jwt expired") {
      api.dispatch(logoutUser());
      return;
    } else if (action?.payload?.status === 500) {
      toast.error("Something went wrong");
    } else if (action?.payload?.status === 401) {
      // api.dispatch(logoutUser());
      toast.error(Capitalize(action?.payload?.data?.message as string) ?? "Something went wrong");
      return;
    } else {
      toast.error(Capitalize(action?.payload?.data?.message as string) ?? "Something went wrong");
    }
  } else {
    if (action?.type === "templeHsApi/executeMutation/fulfilled") {
      toast.success(Capitalize(action?.payload?.message as string) ?? "Success");
    }
  }

  return next(action);
};

const appReducer = combineReducers({
  auth: authReducer,
  [templeHsApi.reducerPath]: templeHsApi.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === "auth/logoutUser") {
    if (typeof window !== undefined) {
      localStorage.removeItem("token" as string);
    }
    templeHsApi.util.resetApiState();
    window.location.replace("/");

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    })
      .concat(templeHsApi.middleware)
      .concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof appReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
