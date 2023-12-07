import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const pageTitle = 'Antonio Santos | Software Developer';
const pageDescription = "Explore a software developer's journey through the world of coding, offering insightful tips, practical tutorials, and personal experiences.";

export default function Home({ allPostsData }) {
  return (
    <Layout home pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className={'text-large text-gray-500 lg:text-xl sm:px-16 text-center'}>
        <p>A Developer's Diary: Chronicles of a Coding Journey</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={'text-xl font-bold'}>Posts</h2>
        <ul role="list" className="divide-y divide-gray-200">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li key={id} className='py-4'>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <p>{excerpt}</p>
          </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
}
