import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import { SSRProvider } from "react-bootstrap";

export default function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SSRProvider>
  );
}
