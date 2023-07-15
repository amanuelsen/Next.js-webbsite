import React from "react";
import img1 from "..";
import Image from "next/image";
const Portfolio = () => {
  return (
    <div>
      <h1>Travel Photo</h1>
      <div>
        <div>
          <Image width={"677"} height={"451"}
            src={
              "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            }
         layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
