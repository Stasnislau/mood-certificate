import type { AppProps } from "next/app";
import Router from "next/router";
import Store from "../store";
import { createContext } from "react";
import { useEffect } from "react";
import "./styles.css";
import Head from "next/head";

const store = new Store();

export const Context = createContext<Store>(store);
const existingRoutes = ["/", "/registration", "/camera-frame", "/certificate"];
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!existingRoutes.includes(Router.pathname)) {
      Router.push("/");
    }
  }, []);
  return (
    <Context.Provider value={store}>
      <Head>
        <title>Mood Checker</title>
        <meta name="description" content="Mood Checker" />
      </Head>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
