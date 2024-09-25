import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { accordionContext } from './context';
import clsx from 'clsx';

interface AccordionGroupProps {
  defaultActiveKey?: string;
  className?: string;
}

const AccordionGroup: FC<PropsWithChildren<AccordionGroupProps>> = (props) => {
  const { defaultActiveKey = null, className, children } = props;
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <div className={clsx('flex flex-col', className)}>
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
