import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NFTDropPage from "./nft/[id]";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NFTDropPage />
    </div>
  );
};

export default Home;
