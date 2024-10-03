import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <div className='root-container'>
      <div className='custom-container'>
        <h1 className='h1-custom'>{t('Title')}</h1>
        <p className='p-custom'>{t('Description')}</p>
        <div className='space-y-2'>
          <h2 className='h2-custom'>{t('Avantages.Title')}</h2>
          <ul className='list-disc list-inside'>
            <li>{t('Avantages.List.First')}</li>
            <li>{t('Avantages.List.Second')}</li>
            <li>{t('Avantages.List.Third')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
