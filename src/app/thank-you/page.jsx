import { SimpleLayout } from '@/components/SimpleLayout';

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${title}`,
      },
    ],
  },
};

export default function ThankYou() {
  return (
    <SimpleLayout
      title='Thanks for subscribing.'
      intro='I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings.'
    />
  );
}
