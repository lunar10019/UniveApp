import type { NextPage } from "next";
import MobileMessages from "../src/messages/MobileMessages";

const MessagesPage: NextPage = () => {
  return <MobileMessages />;
};

export function getStaticProps() {
  return {
    props: {
      messages: require(`../locales/en.json`),
    },
  };
}
export default MessagesPage;
