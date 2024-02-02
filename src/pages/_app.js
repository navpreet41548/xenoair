import Script from "next/script";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Layout from "../../components/Layout";
// import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <ToastContainer /> */}
      {/* <Script type="text/javascript" src="/js/main.js" /> */}
    </>
  );
}

export default MyApp;
