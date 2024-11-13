import axios, { AxiosError } from "axios";
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
interface RegisterPropertyInerface {
  name: string;
  domain: string;
  paymentMethod: string;
}

export const registerProperty = async ({
  name,
  domain,
  paymentMethod,
}: RegisterPropertyInerface) => {
  toast.loading("Creating Property...", loadingStyles);
  try {
    let response = await api.post(
      "/property/create",
      {
        name,
        domain,
        paymentMethod,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    let { data } = response;
    toast.dismiss();
    toast.success(data.message, successStyles);
  } catch (error) {
    toast.dismiss();
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong with the request",
        errorStyles
      );
    } else if (error instanceof Error) {
      toast.error(error.message, errorStyles);
    } else {
      toast.error("Unexpected Error! Please Try Again.", errorStyles);
    }
  }
};

export const getSingleProperty = async (propertyId: string) => {
  try {
    let response = await api.get(``);
  } catch (error) {
    toast.dismiss();
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong with the request",
        errorStyles
      );
    } else if (error instanceof Error) {
      toast.error(error.message, errorStyles);
    } else {
      toast.error("Unexpected Error! Please Try Again.", errorStyles);
    }
  }
};

export const getAllProperties = async () => {
  try {
    let res = await api.get("/property/ali",{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    console.log(res);
  } catch (error) {
    toast.dismiss();
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong with the request",
        errorStyles
      );
    } else if (error instanceof Error) {
      toast.error(error.message, errorStyles);
    } else {
      toast.error("Unexpected Error! Please Try Again.", errorStyles);
    }
  }
};
