'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link, Pathnames } from '@/i18n/routing';

export default function NavigationLink<Pathname extends Pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block transition-colors',
        isActive ? 'text-gray-600' : 'text-gray-400 hover:text-gray-200',
      )}
      href={href}
      {...rest}
    />
  );
}
