import type { NextPage } from "next";

import Content from "../src/dashboard/Content";

const Home: NextPage = () => {
  return <Content />;
};

export default Home;

export function getStaticProps() {
  return {
    props: {
      messages: require(`../locales/en.json`),
    },
  };
}
