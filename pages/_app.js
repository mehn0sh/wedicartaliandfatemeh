import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* ✅ Toast Global */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "20px",
            background: "#fff",
            color: "#be185d",
          },
        }}
      />
    </>
  );
}