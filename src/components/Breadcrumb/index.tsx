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
    <div className={clsx('dgs-ui-kit-bg-gray-100 dgs-ui-kit-w-full', className)}>
      <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-py-3 dgs-ui-kit-overflow-x-auto no-scrollbar dgs-ui-kit-container">
        {items.map((breadcrumbItem, index) => (
          <a
            key={breadcrumbItem.link}
            href={breadcrumbItem.link}
            className="dgs-ui-kit-transition dgs-ui-kit-shrink-0 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-text-gray-500 hover:dgs-ui-kit-text-primary-500"
          >
            {breadcrumbItem.icon && breadcrumbItem.icon}
            <div className="dgs-ui-kit-font-caption-demibold">{breadcrumbItem.title}</div>
            {index !== items.length - 1 || (index === items.length - 1 && pageTitle) ? (
              <IconArrowLeft2
                width={16}
                height={16}
              />
            ) : null}
          </a>
        ))}
        {pageTitle ? (
          <div className="dgs-ui-kit-text-gray-500 dgs-ui-kit-font-caption-regular dgs-ui-kit-shrink-0">
            {pageTitle}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Breadcrumb;
