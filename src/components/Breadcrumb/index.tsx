import clsx from 'clsx';
import type { ReactNode } from 'react';
import ArrowLeft2Icon from '@/src/icons/ArrowLeft2';

import '@/src/styles.css';

interface BreadcrumbProps {
  items: {
    link: string;
    title: string;
    icon?: ReactNode;
  }[];
  pageTitle: string;
  className?: string;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items, pageTitle, className } = props;

  return (
    <div
      className={clsx(
        'dgs-ui-kit-bg-gray-100 dgs-ui-kit-overflow-x-hidden dgs-ui-kit-w-full',
        className,
      )}
    >
      <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-w-full dgs-ui-kit-py-3 dgs-ui-kit-container">
        {items.map((breadcrumbItem) => (
          <a
            key={breadcrumbItem.link}
            href={breadcrumbItem.link}
            className="dgs-ui-kit-transition dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-text-gray-500 hover:dgs-ui-kit-text-primary-500"
          >
            {breadcrumbItem.icon && breadcrumbItem.icon}
            <div className="dgs-ui-kit-font-caption-demibold">{breadcrumbItem.title}</div>
            <ArrowLeft2Icon
              width={16}
              height={16}
            />
          </a>
        ))}
        <div className="dgs-ui-kit-text-gray-500 dgs-ui-kit-font-caption-regular">{pageTitle}</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
