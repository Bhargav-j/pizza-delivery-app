import React from "react";
import Layout from "../../components/layouts/Layout";
import Section1 from "./Section1";
import "../../styles/HomeStyle.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />
        {/* HOme Section About */}
        <Section2/>
        {/* Home Section MEnu */}
        <Section3/>
        {/* Home Section Promotions */}
        <Section4/>
        {/* Home Section Shop */}
        <Section5/>
        {/* Home Section blog */}
        <Section6/>
        {/* Home Section Contact */}
        <Section7/>
      </Layout>
    </>
  );
};

export default Home;
