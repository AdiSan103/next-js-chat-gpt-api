// In a Next.js application, the _app.js file is a special file that allows you to override the default App component provided by Next.js. It serves as the top-level component for all pages in your application.

// The _app.js file acts as a wrapper that wraps around each page component in your Next.js application. It allows you to add global styles, set up global state management, initialize third-party libraries, and handle other common tasks that need to be applied to all pages.

import "tailwindcss/tailwind.css";
import "../src/styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

interface Props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[375px] min-h-screen mx-auto shadow-2xl rounded-[40px]">
        <Fragment>
          <Head>
            {/* Add any head tags or meta information here */}
            {/* google fonts */}
            <Link href={"https://fonts.googleapis.com"} rel="preconnect" />
            <Link href={"https://fonts.gstatic.com"} rel="preconnect" />
            <Link
              href={
                "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
              }
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      </div>
    </div>
  );
}

export default MyApp;
