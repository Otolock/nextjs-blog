import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Antonio Santos';

export default function Layout({ children, home, pageTitle, pageDescription }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={pageDescription}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${pageTitle}`}
        />
        <meta name="og:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className='mx-auto max-w-3xl'>
          <header className={styles.header}>
            {home ? (
              <>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt=""
                />
                <h1 className={'text-center text-4xl font-bold mt-4'}>{name}</h1>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  A Developer's Diary: Chronicles of a Coding Journey
                </p>
              </>
            ) : (
              <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.png"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                  />
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/" className={utilStyles.colorInherit}>
                    {name}
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className='py-8'>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
