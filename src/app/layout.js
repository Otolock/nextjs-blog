import '@/styles/tailwind.css';
import { Layout } from '@/components/Layout';
import { Providers } from '@/app/providers';

export const metadata = {
  metadataBase: new URL('https://antoniojsantos.com'),
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body className='flex h-full bg-neutral-50 dark:bg-black'>
        <div className='flex w-full'>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </div>
      </body>
    </html>
  );
}
