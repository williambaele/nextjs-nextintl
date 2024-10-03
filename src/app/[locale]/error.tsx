'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const t = useTranslations('Error');

  return (
    <div className='bg-[#f7f7f7]'>
      <div className='max-w-7xl px-4 flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>{t('Title')}</h1>
        <p>{t('Description')}</p>
        <Link
          href='/'
          rel='noopener noreferrer'
          className='px-8 py-3 font-semibold rounded bg-[#eb6753] text-white'
        >
          {t('Button')}
        </Link>
      </div>
    </div>
  );
}
