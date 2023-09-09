import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import CartProvider from "@/store/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer position="top-center" />
        </Layout>
      </CartProvider>
    </SessionProvider>
  );
}
