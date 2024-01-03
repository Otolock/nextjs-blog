import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function Article({ article }) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <Card className='md:col-span-3'>
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as='time'
          dateTime={article.date}
          className='md:hidden'
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as='time'
        dateTime={article.date}
        className='mt-1 hidden md:block'
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export const metadata = {
  title: 'Articles',
  description:
    'Delve into a curated collection of articles on software development, entrepreneurial insights, and the journey of an aspiring tech founder. Discover a blend of technical expertise and startup wisdom.',
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${title}`,
      },
    ],
  },
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <SimpleLayout
      title="Navigating Software Development and Entrepreneurship: A Developer's Journey"
      intro='Join me in exploring the realms of software design, startup ventures, and the unique challenges and triumphs of being an aspiring founder in the tech world.'
    >
      <div className='md:border-l md:border-neutral-100 md:pl-6 md:dark:border-neutral-700/40'>
        <div className='flex max-w-3xl flex-col space-y-16'>
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
