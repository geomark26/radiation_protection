import { buttonVariants } from '@/components/ui/button';
import { page_routes, ROUTES } from '@/lib/routes-config';
import {
  BookOpenIcon,
  AtomIcon,
  ZapIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  ActivityIcon,
  ArrowRightIcon,
} from 'lucide-react';
import { Link } from '@/lib/navigation';
import { useTranslations } from 'next-intl';

const MODULE_META = [
  { icon: AtomIcon, accent: 'from-cyan-500/15 to-blue-500/5' },
  { icon: ZapIcon, accent: 'from-amber-500/15 to-orange-500/5' },
  { icon: HeartPulseIcon, accent: 'from-rose-500/15 to-pink-500/5' },
  { icon: ShieldCheckIcon, accent: 'from-emerald-500/15 to-teal-500/5' },
  { icon: ActivityIcon, accent: 'from-violet-500/15 to-indigo-500/5' },
];

export default function Home() {
  const t = useTranslations('home');
  const tRoutes = useTranslations('routes');
  const modules = ROUTES.filter((r) => r.noLink && r.items);

  return (
    <div className='flex flex-col'>
      <section className='relative flex min-h-[85vh] flex-col items-center justify-center text-center px-4 py-20 overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl' />
        </div>

        <p className='text-sm font-medium tracking-widest uppercase text-primary mb-8'>
          {t('badge')}
        </p>

        <h1 className='font-display text-5xl sm:text-7xl mb-6 max-w-[850px] leading-[1.1] tracking-tight'>
          {t('title')}
        </h1>

        <p className='mb-12 text-lg max-w-[560px] text-muted-foreground leading-relaxed'>
          {t('description')}
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <Link
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({
              className: 'px-8 cursor-pointer gap-2',
              size: 'lg',
            })}
          >
            <BookOpenIcon className='w-4 h-4' />
            {t('startLearning')}
          </Link>
          <Link
            href='/quiz'
            className={buttonVariants({
              variant: 'ghost',
              className: 'px-8 cursor-pointer gap-2 text-muted-foreground',
              size: 'lg',
            })}
          >
            {t('takeQuiz')}
            <ArrowRightIcon className='w-4 h-4' />
          </Link>
        </div>
      </section>

      <section className='pb-24 px-4'>
        <div className='max-w-[900px] mx-auto'>
          <p className='text-sm font-medium tracking-widest uppercase text-primary mb-4'>
            {t('curriculum')}
          </p>
          <h2 className='font-display text-3xl sm:text-4xl mb-12'>
            {t('fiveModules')}
          </h2>

          <div className='flex flex-col gap-3'>
            {modules.map((mod, i) => {
              const meta = MODULE_META[i];
              const Icon = meta?.icon || ShieldCheckIcon;
              const firstChild = mod.items?.[0];
              const href = firstChild
                ? `/docs${mod.href}${firstChild.href}`
                : '#';
              const routeKey = `module${i + 1}`;
              const title = tRoutes(routeKey).replace(/^(Module|Ενότητα) \d+:\s*/, '');

              return (
                <Link
                  key={mod.href}
                  href={href}
                  className='group flex items-center gap-5 rounded-xl border p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-sm cursor-pointer'
                >
                  <div
                    className={`shrink-0 rounded-lg bg-gradient-to-br ${meta?.accent || ''} p-3`}
                  >
                    <Icon className='w-5 h-5 text-foreground/70' />
                  </div>

                  <div className='flex-1 min-w-0'>
                    <div className='flex items-baseline gap-3 mb-1'>
                      <span className='text-xs font-mono text-muted-foreground'>
                        0{i + 1}
                      </span>
                      <h3 className='font-semibold truncate'>{title}</h3>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      {mod.items?.length} {t('sections')}
                    </p>
                  </div>

                  <ArrowRightIcon className='w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0' />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
