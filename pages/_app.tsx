import "@/styles/globals.css";
import "@/styles/font.css";
import type { AppProps } from "next/app";
import { reduxWrapper } from "@/store";

function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default reduxWrapper.withRedux(NextApp);
