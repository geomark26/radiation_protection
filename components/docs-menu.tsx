'use client';

import { ROUTES, ROUTE_TITLE_KEYS } from '@/lib/routes-config';
import SubLink from './sublink';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  const tRoutes = useTranslations('routes');

  if (!pathname.includes('/docs')) return null;

  return (
    <div className='flex flex-col gap-3.5 mt-5 pr-2 pb-6'>
      {ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs${item.href}`,
          level: 0,
          isSheet,
          translatedTitle: ROUTE_TITLE_KEYS[item.href] ? tRoutes(ROUTE_TITLE_KEYS[item.href]) : item.title,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
