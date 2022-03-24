import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
// import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
