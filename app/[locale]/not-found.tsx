import { buttonVariants } from '@/components/ui/button';
import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className='min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center'>
      <div className='text-center flex flex-col items-center justify-center w-fit gap-2'>
        <h2 className='text-7xl font-bold pr-1'>{t('title')}</h2>
        <p className='text-muted-foreground text-md font-medium'>{t('subtitle')}</p>
        <p>{t('description')}</p>
      </div>
      <Link href='/' className={buttonVariants({})}>{t('backHome')}</Link>
    </div>
  );
}
