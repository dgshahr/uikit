import clsx from 'clsx';
import type { FC } from 'react';
import { useStepperContext } from './context';
import type { StepperStepStatus } from './type';
import { getStepStatus } from './utils';

interface ConnectorProps {
  index: number;
}

const connectorStatusClassnameMap: Record<StepperStepStatus, string> = {
  active: 'dgs-ui-kit-bg-teal-500 dgs-ui-kit-opacity-100',
  current: 'dgs-ui-kit-bg-gray-300 dgs-ui-kit-opacity-75',
  inactive: 'dgs-ui-kit-bg-gray-200 dgs-ui-kit-opacity-50',
};

const Connector: FC<ConnectorProps> = ({ index }) => {
  const { activeStep, stepOrientation } = useStepperContext();
  const status = getStepStatus(activeStep, index - 1);

  return (
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-min-w-5 dgs-ui-kit-items-center dgs-ui-kit-w-full',
        stepOrientation === 'vertical' ? 'dgs-ui-kit-h-10' : 'dgs-ui-kit-h-15',
      )}
    >
      <div
        className={clsx(
          'dgs-ui-kit-h-0.5 dgs-ui-kit-w-full dgs-ui-kit-rounded-md',
          connectorStatusClassnameMap[status],
        )}
      />
    </div>
  );
};

export default Connector;
