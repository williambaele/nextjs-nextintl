import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { Link } from '@/i18n/routing';
import { Accordion } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <>
      <Navigation />
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
          <Button>
            <Link href='/about'>{t('Link')}</Link>
          </Button>
          <Accordion type='single' collapsible>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
