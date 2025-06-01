'use client';
import clsx from 'clsx';
import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { accordionContext } from './context';

interface AccordionGroupProps {
  defaultActiveKey?: string | string[];
  className?: string;
  disableAccordion?: boolean;
}

function initializeState(
  defaultActiveKey: AccordionGroupProps['defaultActiveKey'],
  disableAccordion: AccordionGroupProps['disableAccordion'] = false,
) {
  if (!defaultActiveKey) return disableAccordion ? [] : null;
  const isDefaultKeyArray = Array.isArray(defaultActiveKey);

  if (disableAccordion) return isDefaultKeyArray ? defaultActiveKey : [defaultActiveKey];

  return isDefaultKeyArray ? (defaultActiveKey[0] as string) : defaultActiveKey;
}

const AccordionGroup: FC<PropsWithChildren<AccordionGroupProps>> = (props) => {
  const { defaultActiveKey, className, children, disableAccordion } = props;
  const [activeKey, setActiveKey] = useState<string | string[] | null>(
    initializeState(defaultActiveKey, disableAccordion),
  );

  return (
    <div className={clsx('dgsuikit:flex dgsuikit:flex-col', className)}>
      <accordionContext.Provider
        value={{
          activeKey,
          setActiveKey,
        }}
      >
        {children}
      </accordionContext.Provider>
    </div>
  );
};

export default AccordionGroup;
