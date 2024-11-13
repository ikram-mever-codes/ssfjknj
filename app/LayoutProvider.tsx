"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import AuthProvider from "./AuthProvider";
import MainMenu from "components/MainDashboard/MainMenu";
import MainHeader from "components/MainDashboard/MainHeader";
import Loading from "./loading";

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const path = usePathname();
  const dispatch = useDispatch();
  const [isSubLayout, setIsSubLayout] = useState<boolean | null>(null);
  const [isProtectedInterface, setIsProtectedInterface] = useState<
    boolean | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (path) {
      setIsProtectedInterface(["/login", "/sign-up", "/verify"].includes(path));
      setIsSubLayout(path.startsWith("/property"));
      setIsLoading(false);
    }
  }, [path]);

  if (isLoading) {
    return <Loading />;
  }

  return isProtectedInterface ? (
    <main className="w-full min-h-screen h-max">{children}</main>
  ) : (
    <AuthProvider>
      <div className="flex w-full min-h-screen">
        <aside className="hidden md:block sticky top-0 w-max h-screen">
          <MainMenu />
        </aside>
        <div className="flex flex-col w-full min-h-screen px-[3rem]">
          {!isSubLayout && <MainHeader />}
          <main className="flex-grow">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default LayoutProvider;
