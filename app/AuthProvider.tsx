"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const { propertyManager, loading } = useSelector(
    (state: RootState) => state.propertyManagerReducer
  );

  // useEffect(() => {

  //   // Redirect to login if not loading and propertyManager is null
  //   if (!loading && propertyManager === null) {
  //     router.push("/login");
  //   }
  // }, [propertyManager, loading, router]);

  // // Show nothing while loading or if propertyManager is null
  // if (loading || propertyManager === null) {
  //   return null;
  // }

  return <>{children}</>;
};

export default AuthProvider;
