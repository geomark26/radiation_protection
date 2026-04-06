import { EachRoute, ROUTE_TITLE_KEYS } from '@/lib/routes-config';
import Anchor from './anchor';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { SheetClose } from '@/components/ui/sheet';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function SubLink({
  title,
  href,
  items,
  noLink,
  level,
  isSheet,
  translatedTitle,
}: EachRoute & { level: number; isSheet: boolean; translatedTitle?: string }) {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(level == 0);
  const tRoutes = useTranslations('routes');

  const displayTitle = translatedTitle || title;

  useEffect(() => {
    if (path.includes(href)) setIsOpen(true);
  }, [href, path]);

  const Comp = (
    <Anchor
      activeClassName='text-primary dark:font-medium font-semibold'
      href={href}
    >
      {displayTitle}
    </Anchor>
  );

  const titleOrLink = !noLink ? (
    isSheet ? (
      <SheetClose asChild>{Comp}</SheetClose>
    ) : (
      Comp
    )
  ) : (
    <h4 className='font-large text-primary text-left'>{displayTitle}</h4>
  );

  if (!items) {
    return <div className='flex flex-col'>{titleOrLink}</div>;
  }

  return (
    <div className='flex flex-col gap-1 w-full'>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className='w-full pr-5'>
          <div className='flex items-center justify-between cursor-pointer w-full'>
            {titleOrLink}
            <span>
              {!isOpen ? (
                <ChevronRight className='h-[0.9rem] w-[0.9rem]' />
              ) : (
                <ChevronDown className='h-[0.9rem] w-[0.9rem]' />
              )}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            className={cn(
              'flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-4 mt-2.5 gap-3',
              level > 0 && 'pl-4 border-l ml-1.5'
            )}
          >
            {items?.map((innerLink) => {
              const innerHref = `${href}${innerLink.href}`;
              const routeHref = innerHref.replace(/^\/docs/, '');
              const translationKey = ROUTE_TITLE_KEYS[routeHref];
              const modifiedItems = {
                ...innerLink,
                href: innerHref,
                level: level + 1,
                isSheet,
                translatedTitle: translationKey ? tRoutes(translationKey) : innerLink.title,
              };
              return <SubLink key={modifiedItems.href} {...modifiedItems} />;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
