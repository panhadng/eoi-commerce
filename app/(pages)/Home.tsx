import React from "react";
import Banner from "@/app/components/Banner";
import Categories from "@/app/components/Categories";
import Featured from "@/app/components/Featured";

const Home = () => {
  return (
    <div className="container flex flex-col relative h-[80vh] overflow-y-scroll">
      <Banner />
      <Categories />
      <Featured areaTitle={"Popular Products"} products={["Chair", "Table"]} />
      <Featured
        areaTitle={"Products of your Interest"}
        products={["Chair", "Table"]}
      />
    </div>
  );
};

export default Home;
