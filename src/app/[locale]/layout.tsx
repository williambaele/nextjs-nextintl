import clsx from 'clsx';
import {Lato} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import {routing} from '@/i18n/routing';

const inter = Lato({subsets: ['latin'], weight: '400'});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

//// META DATA ////
export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'IndexPage'});

  return {
    title: t('MetaTitle'),
    description: t('MetaDescription')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider messages={messages}>
         
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
