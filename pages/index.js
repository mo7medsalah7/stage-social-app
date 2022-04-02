import Head from "next/head";
import Header from "../components/Header/Header";
import Menu from "./../components/Menu/Menu";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NewsFeed from "./../components/NewsFeed/NewsFeed";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-row">
          <Menu />
          <Header />
        </div>
        <section className="my-10">
          <NewsFeed />
        </section>
      </main>
    </div>
  );
}
