import type { NextPage } from "next";
import Head from "next/head";

//components
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title> Reddit 2.0</title>
      </Head>

      <PostBox />
    </div>
  );
};

export default Home;
