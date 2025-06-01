import clsx from 'clsx';
import type { FC } from 'react';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import { DURATION_CLASS } from './constants';
import { useSidebarContext } from './context';

const SidebarToggleButton: FC = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  return (
    <button
      type="button"
      className="dgsuikit:absolute dgsuikit:top-7 dgsuikit:left-0 dgsuikit:-translate-x-1/2 dgsuikit:p-1 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-gray-300 dgsuikit:bg-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      <IconArrowLeft2
        className={clsx(
          'dgsuikit:transition-transform dgsuikit:text-primary-500',
          isOpen && 'dgsuikit:rotate-180',
          DURATION_CLASS,
        )}
        width={16}
        height={16}
      />
    </button>
  );
};

export default SidebarToggleButton;
