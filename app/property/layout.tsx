import { ReactNode } from "react";
import PropertyLayoutProvider from "./PropertyLayoutProvider";

export const metadata = {
  title: "Property Managers Portal",
  description:
    "A portal for property managers to manage their tasks and properties.",
};

export default function PropertyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="w-full  overflow-hidden">
        <PropertyLayoutProvider>{children}</PropertyLayoutProvider>
      </main>
    </>
  );
}
