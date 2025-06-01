import clsx from 'clsx';
import type { FC } from 'react';
import { useStepperContext } from './context';
import type { HorizontalStepperStepStatus } from './type';
import { getStepStatus } from './utils';

interface ConnectorProps {
  index: number;
}

const connectorStatusClassnameMap: Record<HorizontalStepperStepStatus, string> = {
  complete: 'dgsuikit:bg-teal-500 dgsuikit:opacity-100',
  current: 'dgsuikit:bg-gray-300 dgsuikit:opacity-75',
  incomplete: 'dgsuikit:bg-gray-200 dgsuikit:opacity-50',
};

const Connector: FC<ConnectorProps> = ({ index }) => {
  const { activeStep, stepOrientation } = useStepperContext();
  const status = getStepStatus(activeStep, index - 1);

  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:min-w-5 dgsuikit:items-center dgsuikit:w-full',
        stepOrientation === 'vertical' ? 'dgsuikit:h-10' : 'dgsuikit:h-15',
      )}
    >
      <div
        className={clsx(
          'dgsuikit:h-0.5 dgsuikit:w-full dgsuikit:rounded-md',
          connectorStatusClassnameMap[status],
        )}
      />
    </div>
  );
};

export default Connector;
