import clsx from 'clsx';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import type { BreadcrumbProps } from './types';

import '@/src/styles.css';

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items, pageTitle, className } = props;

  return (
    <div className={clsx('dgsuikit:bg-gray-100 dgsuikit:w-full', className)}>
      <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:py-1 dgsuikit:overflow-x-auto dgsuikit:no-scrollbar dgsuikit:container">
        {items.map((breadcrumbItem, index) => {
          const ItemElement = 'link' in breadcrumbItem ? 'a' : 'button';
          return (
            <ItemElement
              key={breadcrumbItem.title}
              {...('link' in breadcrumbItem
                ? { href: breadcrumbItem.link }
                : { onClick: breadcrumbItem.onClick })}
              className="dgsuikit:transition dgsuikit:shrink-0 dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:text-gray-500 dgsuikit:hover:text-primary-500"
            >
              {breadcrumbItem.icon && breadcrumbItem.icon}
              <div className="dgsuikit:font-caption-regular">{breadcrumbItem.title}</div>
              {index !== items.length - 1 || (index === items.length - 1 && pageTitle) ? (
                <IconArrowLeft2
                  width={16}
                  height={16}
                />
              ) : null}
            </ItemElement>
          );
        })}
        {pageTitle ? (
          <div className="dgsuikit:text-gray-500 dgsuikit:font-caption-demibold dgsuikit:shrink-0">
            {pageTitle}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Breadcrumb;
export * from './types';
