'use client';

import { getDocsTocs } from '@/lib/markdown';
import clsx from 'clsx';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

type Props = { data: Awaited<ReturnType<typeof getDocsTocs>> };

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const intersecting = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersecting.current.add(entry.target.id);
        } else {
          intersecting.current.delete(entry.target.id);
        }
      });

      // Pick the topmost visible heading in document order
      for (const item of data) {
        const id = item.href.slice(1);
        if (intersecting.current.has(id)) {
          setActiveId(id);
          return;
        }
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20px 0px -40% 0px',
      threshold: 0,
    });

    const elements = data.map((item) =>
      document.getElementById(item.href.slice(1)),
    );

    elements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        elements.forEach((el) => {
          if (el) {
            observer.current!.unobserve(el);
          }
        });
      }
      intersecting.current.clear();
    };
  }, [data]);

  return (
    <div className='flex flex-col gap-2.5 text-sm dark:text-stone-300/85 text-stone-800 ml-0.5'>
      {data.map(({ href, level, text }, index) => {
        return (
          <Link
            key={href + text + level + index}
            href={href}
            className={clsx({
              'pl-0': level == 2,
              'pl-4': level == 3,
              'pl-8 ': level == 4,
              'dark:font-medium font-semibold text-primary':
                activeId == href.slice(1),
            })}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
}
