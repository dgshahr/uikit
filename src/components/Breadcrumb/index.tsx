import clsx from 'clsx';
import type { ReactNode } from 'react';

import '@/src/styles.css';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';

interface BreadcrumbProps {
  items: {
    link: string;
    title: string;
    icon?: ReactNode;
  }[];
  pageTitle?: string;
  className?: string;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items, pageTitle, className } = props;

  return (
    <div className={clsx('dgsuikit:bg-gray-100 dgsuikit:w-full', className)}>
      <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:py-3 dgsuikit:overflow-x-auto no-scrollbar dgsuikit:container">
        {items.map((breadcrumbItem, index) => (
          <a
            key={breadcrumbItem.link}
            href={breadcrumbItem.link}
            className="dgsuikit:transition dgsuikit:shrink-0 dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:text-gray-500 dgsuikit:hover:text-primary-500"
          >
            {breadcrumbItem.icon && breadcrumbItem.icon}
            <div className="dgsuikit:font-caption-demibold">{breadcrumbItem.title}</div>
            {index !== items.length - 1 || (index === items.length - 1 && pageTitle) ? (
              <IconArrowLeft2
                width={16}
                height={16}
              />
            ) : null}
          </a>
        ))}
        {pageTitle ? (
          <div className="dgsuikit:text-gray-500 dgsuikit:font-caption-regular dgsuikit:shrink-0">
            {pageTitle}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Breadcrumb;
