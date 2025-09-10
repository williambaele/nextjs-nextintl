'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const localeConfig = {
  en: {
    flag: '🇺🇸',
    label: 'EN',
    name: 'English',
  },
  fr: {
    flag: '🇫🇷',
    label: 'FR',
    name: 'Français',
  },
} as const;

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale as Locale },
      );
    });
  };


  // Note ---> Uncomment the flag if you want to display the flag

  return (
    <Select
      value={locale}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger className='w-[80px] bg-background border-border'>
        <SelectValue>
          <div className='flex items-center gap-2'>
            {/*
            <span className="text-lg">{localeConfig[locale as keyof typeof localeConfig].flag}</span>
          */}
            <span className='font-medium'>
              {localeConfig[locale as keyof typeof localeConfig].label}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur} className='cursor-pointer'>
            <div className='flex items-center gap-3'>
              {/*
              <span className="text-lg">{localeConfig[cur as keyof typeof localeConfig].flag}</span>
              */}
              <div className='flex flex-col'>
                <span className='font-medium'>
                  {localeConfig[cur as keyof typeof localeConfig].label}
                </span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
