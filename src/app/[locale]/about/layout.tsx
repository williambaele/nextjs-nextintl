// /about/layout.tsx

import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

//// META DATA ////
export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return {
    title: t('MetaTitle'),
    description: t('MetaDescription'),
  };
}

//// CHILDREN ////
export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Set the locale for the request to enable static rendering
  unstable_setRequestLocale(locale);

  return <>{children}</>;
}
