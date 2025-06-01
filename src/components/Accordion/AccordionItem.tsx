'use client';
import clsx from 'clsx';
import { useId } from 'react';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import IconArrowDown2 from '@/src/icons/IconArrowDown2';
import { useAccordionContext } from './context';
import Divider from '../Divider';

interface AccordionItemProps {
  title: ReactNode;
  accordionKey?: string;
  className?: string;
  contentClassName?: string;
  hideDivider?: boolean;
  hideArrow?: boolean;
  titleClassName?: string;
  disable?: boolean;
}

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = (props) => {
  const {
    children,
    title,
    accordionKey,
    className,
    contentClassName,
    hideDivider = false,
    hideArrow = false,
    titleClassName,
    disable,
  } = props;
  const { activeKey, setActiveKey } = useAccordionContext();
  const reactUseId = useId();
  const accordionItemKey = accordionKey ?? reactUseId;
  const isAccordionDisable = Array.isArray(activeKey);

  function checkIsItemActive() {
    if (disable) return false;

    if (isAccordionDisable) {
      return activeKey.includes(accordionItemKey);
    }
    return accordionItemKey === activeKey;
  }

  const isItemActive = checkIsItemActive();

  function toggleItemVisibility() {
    if (isItemActive) {
      if (isAccordionDisable) setActiveKey(activeKey.filter((key) => key !== accordionItemKey));
      else setActiveKey(null);
    } else if (isAccordionDisable) {
      setActiveKey([...activeKey, accordionItemKey]);
    } else setActiveKey(accordionItemKey);
  }

  return (
    <div className={clsx('dgsuikit:bg-white dgsuikit:px-4 dgsuikit:pt-4', className)}>
      <button
        className={clsx(
          'dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center dgsuikit:w-full',
          isItemActive ? 'dgsuikit:text-primary-500' : 'dgsuikit:text-gray-600',
          titleClassName,
        )}
        onClick={toggleItemVisibility}
        disabled={disable}
      >
        <div className={isItemActive ? 'dgsuikit:font-h5-bold' : 'dgsuikit:font-p1-medium'}>
          {title}
        </div>
        {!hideArrow && (
          <IconArrowDown2
            className={clsx(
              'dgsuikit:transition-transform dgsuikit:duration-300 dgsuikit:shrink-0 dgsuikit:w-auto dgsuikit:h-auto',
              isItemActive && 'dgsuikit:rotate-180',
            )}
            width={20}
            height={20}
          />
        )}
      </button>
      <div
        className={clsx(
          'dgsuikit:grid dgsuikit:font-p1-regular dgsuikit:text-gray-600 dgsuikit:overflow-hidden dgsuikit:transition-all dgsuikit:duration-300 dgsuikit:ease-in-out',
          isItemActive
            ? 'dgsuikit:grid-rows-[1fr] dgsuikit:opacity-100 dgsuikit:mt-3'
            : 'dgsuikit:grid-rows-[0fr] dgsuikit:opacity-0',
          contentClassName,
        )}
      >
        <div className="dgsuikit:overflow-hidden">{children}</div>
      </div>
      {!hideDivider && (
        <Divider
          type="horizontal"
          color="white"
          className="dgsuikit:mt-4"
        />
      )}
    </div>
  );
};

export default AccordionItem;
