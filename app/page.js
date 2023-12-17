import { getSortedPostsData } from "../lib/posts"

import Link from 'next/link';
import Date from '../components/date';
import Layout from "../components/layout";

export const metadata = {
  title: 'Antonio Santos | Software Developer',
  description: 'Explore a software developer\'s journey through the world of coding, offering insightful tips, practical tutorials, and personal experiences.',
}

async function getPosts() {
  return getSortedPostsData();
}

export default async function Page() {
  let posts = await getPosts();

  return (
    <Layout home>
      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mt-5 space-y-16 border-t border-gray-200 pt-5 sm:mt-8 sm:pt-8">
              {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <Date dateString={post.date} className="text-gray-500" />
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-sky-500 group-hover:text-sky-600">
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
  )
}