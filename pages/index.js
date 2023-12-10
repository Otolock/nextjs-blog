import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

// allPostsData.map(({ id, date, title, excerpt })
// <p>A Developer's Diary: Chronicles of a Coding Journey</p>

const pageTitle = 'Antonio Santos | Software Developer';
const pageDescription = "Explore a software developer's journey through the world of coding, offering insightful tips, practical tutorials, and personal experiences.";

export default function Home({ posts }) {
  return (
    <Layout home pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mt-5 space-y-16 border-t border-gray-200 pt-5 sm:mt-8 sm:pt-8">
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <Date dateString={post.date} className="text-gray-500" />
                    {/* This section has been commented out as post categories are not currently implemented */}
                    {/* <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a> */}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/posts/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
