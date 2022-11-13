import type { NextPage } from "next";
import Header from "../src/components/Header";
import Stats from "../src/components/Stats";

const Home: NextPage = () => (
  <div>
    <Header />
    <div>Home Page</div>

    <Stats />
  </div>
);

export default Home;
