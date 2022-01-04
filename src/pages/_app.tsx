import App from "next/app";
import GlobalStyles from "@styles/global";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <GlobalStyles />
      </>
    );
  }
}
