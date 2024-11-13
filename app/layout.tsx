import { Inter } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./LayoutProvider";
import { Toaster } from "react-hot-toast";
import ContextProvider from "./ContextProvider";
import ThemesProvider from "./ThemeProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Property Managers Portal",
  description:
    "A portal for property managers to manage their tasks and properties.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Nova+Square&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemesProvider>
          <ContextProvider>
            <LayoutProvider>{children}</LayoutProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                className: "",
                duration: 5000,
                style: {},
              }}
            />
          </ContextProvider>
        </ThemesProvider>
      </body>
    </html>
  );
}
