import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ROUTE_TITLE_KEYS } from '@/lib/routes-config';
import { Fragment } from 'react';
import { getTranslations } from 'next-intl/server';

export default async function DocsBreadcrumb({ paths }: { paths: string[] }) {
  const t = await getTranslations('docs');
  const rt = await getTranslations('routes');

  function getLabel(segments: string[], index: number): string {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const key = ROUTE_TITLE_KEYS[href];
    if (key) return rt(key);
    return toTitleCase(segments[index]);
  }

  return (
    <div className='pb-5'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>{t('breadcrumbDocs')}</BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((path, index) => (
            <Fragment key={path}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index < paths.length - 1 ? (
                  <BreadcrumbLink>
                    {getLabel(paths, index)}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>
                    {getLabel(paths, index)}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function toTitleCase(input: string): string {
  const words = input.split('-');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(' ');
}
