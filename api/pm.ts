import axios from "axios";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import { useRouter } from "next/navigation";
import {
  setPropertyManager,
  setLoading,
  setError,
} from "app/Redux/features/pmSlice";
import {
  errorStyles,
  loadingStyles,
  PORTAL_BASE_URL,
  successStyles,
} from "lib/constant";

const api = axios.create({
  baseURL: PORTAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

interface LoginInterface {
  email: string;
  password: string;
}
interface EditPmProfileInterface {
  firstName: string;
  lastName: string;
  city: string;
  linkedinUrl: string;
  avatar?: File | null;
}
interface SignUpInterface {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  setErrorMessage: (message: string) => void;
  dispatch: Dispatch;
  router: ReturnType<typeof useRouter>;
}

// Sign-up function
export const signUp = async ({
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
  setErrorMessage,
  dispatch,
  router,
}: SignUpInterface) => {
  try {
    const res = await api.post("/sign-up", {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
    });

    localStorage.setItem(
      "signUpData",
      JSON.stringify({
        email,
        firstName,
        lastName,
      })
    );

    return router.push("/verify");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data.message === "string"
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } else if (error instanceof Error) {
      setErrorMessage(error.message);
      setErrorMessage("An unexpected error occurred.");
    }
  }
};

interface VerifyPmAccountInterface {
  email: string;
  code: string;
  dispatch: Dispatch;
  setErrorMessage: (message: string) => void;
}
export const verifPmACcount = async ({
  email,
  code,
  setErrorMessage,
  dispatch,
}: VerifyPmAccountInterface) => {
  try {
    toast.loading("Verifying Account...", loadingStyles);
    let res = await api.put("/verify-account", {
      email,
      verificationCode: code,
    });
    let { data } = res;
    toast.dismiss();
    toast.success(data.message, successStyles);
    localStorage.removeItem("signUpData"); 
    return dispatch(setPropertyManager(data.propertyManager));
  } catch (error) {
    toast.dismiss();
    if (axios.isAxiosError(error)) {
      if (
        error.response &&
        error.response.data &&
        typeof error.response.data.message === "string"
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } else if (error instanceof Error) {
      setErrorMessage(error.message);
      setErrorMessage("An unexpected error occurred.");
    }
  }
};

export const login = async (loginData: LoginInterface, dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    toast.loading("Signing In...", loadingStyles);
    let res = await api.post("/login", loginData);

    let { data } = res;
    dispatch(setPropertyManager(data.propertyManager));
    dispatch(setLoading(false));
    toast.dismiss();
    toast.success(data.message);
  } catch (error) {
    toast.dismiss();
    dispatch(setLoading(false));

    if (error instanceof Error) {
      toast.error(error.message, errorStyles);
    } else {
      toast.error("Unexpected error! Try Again", errorStyles);
    }
  }
};

export const refresh = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  try {
    const res = await api.get("/refresh");
    const { data } = res;

    if (data.propertyManager) {
      dispatch(setPropertyManager(data.propertyManager));
    } else {
      console.error("Unexpected response structure:", data);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error refreshing:", error.message);
    } else {
      console.error("Unexpected error! Try Again");
    }
  } finally {
    dispatch(setLoading(false));
  }
};

export const logout = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  try {
    const res = await api.get("/logout");
    const { data } = res;

    dispatch(setPropertyManager(null));
    return toast.success(data.message, successStyles);
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message, errorStyles);
    } else {
      console.error("Unexpected error! Try Again");
    }
  } finally {
    dispatch(setLoading(false));
  }
};
export const editPmProfile = async (
  updatedData: EditPmProfileInterface,
  dispatch: Dispatch
) => {
  toast.loading("Updating Profile...", loadingStyles);

  const formData = new FormData();
  if (updatedData.avatar) {
    formData.append("avatar", updatedData.avatar);
  }
  formData.append("firstName", updatedData.firstName);
  formData.append("lastName", updatedData.lastName);
  formData.append("city", updatedData.city);
  formData.append("linkedinUrl", updatedData.linkedinUrl);

  try {
    const res = await api.put("/profile/edit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { data } = res;

    if (data.propertyManager) {
      dispatch(setPropertyManager(data.propertyManager));
    }
    toast.dismiss();
    return toast.success(data.message, successStyles);
  } catch (error) {
    toast.dismiss();
    if (error instanceof Error) {
      toast.error(error.message, errorStyles);
    } else {
      console.error("Unexpected error! Try Again");
    }
  } finally {
    dispatch(setLoading(false));
  }
};
