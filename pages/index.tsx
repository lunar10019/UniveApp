import type { NextPage } from "next";

import Dashboard from "../src/dashboard";

const Home: NextPage = () => {
  return <Dashboard />;
};

export default Home;

export function getStaticProps() {
  return {
    props: {
      messages: require(`../locales/en.json`),
    },
  };
}
