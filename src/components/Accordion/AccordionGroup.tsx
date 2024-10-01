import clsx from 'clsx';
import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { accordionContext } from './context';

interface AccordionGroupProps {
  defaultActiveKey?: string;
  className?: string;
}

const AccordionGroup: FC<PropsWithChildren<AccordionGroupProps>> = (props) => {
  const { defaultActiveKey = null, className, children } = props;
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return (
    <div className={clsx('dgs-ui-kit-flex dgs-ui-kit-flex-col', className)}>
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
