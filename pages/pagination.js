import Head from "next/head";

import LoadMorePost from "../components/LoadMorePost";

export default function LoadMore() {
  return (
    <>
      <Head>
        <title>Load More</title>
      </Head>

      <main>
        <h1>Load More Example</h1>
        <LoadMorePost />
      </main>
    </>
  );
}
