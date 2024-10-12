'use client';
import clsx from 'clsx';
import { useId } from 'react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import ArrowDown2Icon from '@/src/icons/ArrowDown2';
import { useAccordionData } from './context';
import Divider from '../Divider';

interface AccordionItemProps {
  title: string | ReactNode;
  accordionKey?: string;
  className?: string;
  contentClassName?: string;
}

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (props) => {
  const { children, title, accordionKey, className, contentClassName } = props;
  const { activeKey, setActiveKey } = useAccordionData();
  const reactUseId = useId();
  const accordionItemKey = accordionKey ?? reactUseId;
  const isItemActive = accordionItemKey === activeKey;

  return (
    <div className={clsx('dgs-ui-kit-bg-white dgs-ui-kit-px-4 dgs-ui-kit-pt-4', className)}>
      <button
        className={clsx(
          'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-w-full',
          isItemActive ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-600',
        )}
        onClick={() => {
          if (isItemActive) setActiveKey(null);
          else setActiveKey(accordionItemKey);
        }}
      >
        <div className={isItemActive ? 'dgs-ui-kit-font-h5-bold' : 'dgs-ui-kit-font-p1-medium'}>
          {title}
        </div>
        <ArrowDown2Icon
          className={clsx(
            'dgs-ui-kit-transition dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out dgs-ui-kit-shrink-0 dgs-ui-kit-w-auto dgs-ui-kit-h-auto',
            isItemActive && 'dgs-ui-kit-rotate-180',
          )}
          width={20}
          height={20}
        />
      </button>
      <div
        className={clsx(
          'dgs-ui-kit-grid dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-600 dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-all dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out',
          isItemActive
            ? 'dgs-ui-kit-grid-rows-[1fr] dgs-ui-kit-opacity-100 dgs-ui-kit-mt-3'
            : 'dgs-ui-kit-grid-rows-[0fr] dgs-ui-kit-opacity-0',
          contentClassName,
        )}
      >
        <div className="dgs-ui-kit-overflow-hidden">{children}</div>
      </div>
      <Divider
        type="horizontal"
        color="white"
        className="dgs-ui-kit-mt-4"
      />
    </div>
  );
};

export default AccordionItem;
