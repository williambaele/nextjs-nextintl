import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

//// META DATA ////
export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('MetaTitle'),
    description: t('MetaDescription'),
  };
}
//// CHILDREN ////
export default function LocaleLayout({ children, params: { locale } }: Props) {
  return <>{children}</>;
}
