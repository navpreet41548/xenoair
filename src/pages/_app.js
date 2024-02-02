import Script from "next/script";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Layout from "../../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
      {/* <Script type="text/javascript" src="/js/main.js" /> */}
    </>
  );
}

export default MyApp;
