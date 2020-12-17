import React from "react";
import Link from "next/link";

const AboutPage = (props) => {
  console.log("props in about page: ", props);
  return (
    <div>
      <Link href="/">
        <a>go back to homepage</a>
      </Link>
    </div>
  );
};

export default AboutPage;
