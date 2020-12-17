import React from "react";
import Head from "next/head";

const App = ({ pageProps, Component }) => {
  return (
    <React.Fragment>
      <Head>
        <title>NextJS Learning</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
