import { useTranslations } from 'next-intl';

export default function Example() {
  const h = useTranslations('Navigation');
  const t = useTranslations('About');


  return (
    <>
      <div className='root-container'>
        <div className='custom-container'>
          <h1 className='h1-custom'>{t('Title')}</h1>
          <p className='p-custom'>{t('Description')}</p>
        </div>
      </div>
    </>
  );
}
