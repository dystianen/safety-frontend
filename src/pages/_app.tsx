import "@/styles/globals.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import { StoreProvider } from "@/components/StoreProvider";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
