import type { AppProps } from "next/app";
import Store from "../store";
import { createContext } from "react";

const store = new Store();
export const Context = createContext<Store>( store );
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context.Provider value={store}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
