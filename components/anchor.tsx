'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function Anchor({
  absolute,
  className = '',
  activeClassName = '',
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  const pathWithoutLocale = path.replace(/^\/(en|el)/, '');
  const hrefStr = props.href.toString();

  let isMatch = absolute
    ? hrefStr.split('/')[1] == pathWithoutLocale.split('/')[1]
    : pathWithoutLocale === hrefStr;

  if (hrefStr.includes('http')) isMatch = false;

  if (disabled)
    return (
      <div className={cn(className, 'cursor-not-allowed')}>{children}</div>
    );
  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  );
}
