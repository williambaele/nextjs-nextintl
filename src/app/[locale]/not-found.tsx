import {Button} from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className='h-screen bg-red-200 flex items-center justify-center'>
      <div className='root-container flex justify-center items-center'>
        <div className='custom-container'>
          <div className='max-w-xl flex flex-col items-center justify-center space-y-6 text-center'>
            <h1 className='h1-custom'>{t('Title')}</h1>
            <p className='p-custom'>{t('Description')}</p>
            <Button>{t('Button')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
