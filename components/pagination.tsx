import { getPreviousNext } from '@/lib/markdown';
import { ROUTE_TITLE_KEYS } from '@/lib/routes-config';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { buttonVariants } from './ui/button';
import { getTranslations } from 'next-intl/server';

export default async function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname);
  const t = await getTranslations('docs');
  const rt = await getTranslations('routes');

  function getTitle(page: { title: string; href: string }) {
    const key = ROUTE_TITLE_KEYS[page.href];
    return key ? rt(key) : page.title;
  }

  return (
    <div className='flex flex-col sm:grid sm:grid-cols-2 flex-grow sm:py-10 py-7 gap-3'>
      <div>
        {res.prev && (
          <Link
            className={buttonVariants({
              variant: 'outline',
              className:
                'no-underline w-full flex flex-col pl-3 !py-8 items-stretch!',
            })}
            href={`/docs${res.prev.href}`}
          >
            <span className='flex items-center text-muted-foreground text-xs self-start'>
              <ChevronLeftIcon className='w-[1rem] h-[1rem] mr-1 shrink-0' />
              {t('previous')}
            </span>
            <span className='mt-1 ml-1 truncate text-left'>
              {getTitle(res.prev)}
            </span>
          </Link>
        )}
      </div>
      <div>
        {res.next && (
          <Link
            className={buttonVariants({
              variant: 'outline',
              className:
                'no-underline w-full flex flex-col pr-3 !py-8 items-stretch!',
            })}
            href={`/docs${res.next.href}`}
          >
            <span className='flex items-center text-muted-foreground text-xs sm:self-end'>
              {t('next')}
              <ChevronRightIcon className='w-[1rem] h-[1rem] ml-1 shrink-0' />
            </span>
            <span className='mt-1 mr-1 truncate sm:text-right text-left'>
              {getTitle(res.next)}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
