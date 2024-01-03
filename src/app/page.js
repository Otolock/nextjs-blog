import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { GitHubIcon, ThreadsIcon } from '@/components/SocialIcons';

import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

const title = 'Antonio Santos | Software Developer & Aspiring Founder';

export const metadata = {
  title: title,
  description:
    'Embark on a journey with Antonio Santos, a software developer and aspiring tech entrepreneur. Discover a mix of in-depth articles on software design, startup insights, and the adventures of building in the tech world.',
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${title}`,
      },
    ],
  },
};

function MailIcon(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
        className='fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500'
      />
      <path
        d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
        className='stroke-neutral-400 dark:stroke-neutral-500'
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as='article'>
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as='time' dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-neutral-500 transition group-hover:fill-neutral-600 dark:fill-neutral-400 dark:group-hover:fill-neutral-300' />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action='/thank-you'
      className='rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40'
    >
      <h2 className='flex text-sm font-semibold text-neutral-900 dark:text-neutral-100'>
        <MailIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Stay up to date</span>
      </h2>
      <p className='mt-2 text-sm text-neutral-600 dark:text-neutral-400'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className='mt-6 flex'>
        <input
          type='email'
          placeholder='Email address'
          aria-label='Email address'
          required
          className='min-w-0 flex-auto appearance-none rounded-md border border-neutral-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-neutral-800/5 placeholder:text-neutral-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-neutral-700 dark:bg-neutral-700/[0.15] dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm'
        />
        <Button type='submit' className='ml-4 flex-none'>
          Join
        </Button>
      </div>
    </form>
  );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl'>
            Software developer and aspiring founder.
          </h1>
          <p className='mt-6 text-base text-neutral-600 dark:text-neutral-400'>
            I’m Antonio, a software developer and aspiring founder based in
            Puerto Rico.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://github.com/otolock'
              aria-label='Follow on GitHub'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://threads.net/otolock'
              aria-label='Follow on Threads'
              icon={ThreadsIcon}
            />
          </div>
        </div>
      </Container>
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}
