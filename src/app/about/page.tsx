import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <Link href="about/story">Read our story</Link>
    </div>
  );
};

export default About;
