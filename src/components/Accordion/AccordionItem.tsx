import clsx from 'clsx';
import { useId } from 'react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import Divider from '../Divider';
import { useAccordionData } from './context';
import ArrowDown2Icon from '@/src/icons/ArrowDown2';

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
    <div className={clsx('bg-white px-4 pt-4', className)}>
      <button
        className={clsx(
          'flex justify-between items-center w-full',
          isItemActive ? 'text-primary-500' : 'text-gray-600',
        )}
        onClick={() => {
          if (isItemActive) setActiveKey(null);
          else setActiveKey(accordionItemKey);
        }}
      >
        <div className={isItemActive ? 'font-h5-bold' : 'font-p1-medium'}>{title}</div>
        <ArrowDown2Icon
          className={clsx(
            'transition duration-300 ease-in-out shrink-0 w-auto h-auto',
            isItemActive && 'rotate-180',
          )}
          width={20}
          height={20}
        />
      </button>
      <div
        className={clsx(
          'grid font-p1-regular text-gray-600 overflow-hidden transition-all duration-300 ease-in-out',
          isItemActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0',
          contentClassName,
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
      <Divider
        type="horizontal"
        color="white"
        className="mt-4"
      />
    </div>
  );
};

export default AccordionItem;
