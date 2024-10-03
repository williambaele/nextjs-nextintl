import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
export default function Example() {
  const t = useTranslations('AboutPage');


  return (
    <>
    <Navigation/>
      <div className='root-container'>
        <div className='custom-container'>
          <h1 className='h1-custom'>{t('Title')}</h1>
          <p className='p-custom'>{t('Description')}</p>
        </div>
      </div>
    </>
  );
}
