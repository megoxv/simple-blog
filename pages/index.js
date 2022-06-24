import Head from "next/head";
import { post } from "../assets/data";
import { siteName } from "../assets/variables";
import { PostCard } from "../components";

const Home = ({ posts }) => {
  return (
    <div className="bg-gray-50 dark:bg-main-dark">
      <div className="container  px-11 md:px-16 xl:px-36 mx-auto pb-8 ">
        <Head>
          <title>{siteName}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {post.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: {posts}
//   }
// }

export default Home;
