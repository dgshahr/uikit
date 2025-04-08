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
      className="dgs-ui-kit-absolute dgs-ui-kit-top-7 dgs-ui-kit-left-0 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-p-1 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-bg-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      <IconArrowLeft2
        className={clsx(
          'dgs-ui-kit-transition-transform dgs-ui-kit-text-primary-500',
          isOpen && 'dgs-ui-kit-rotate-180',
          DURATION_CLASS,
        )}
        width={16}
        height={16}
      />
    </button>
  );
};

export default SidebarToggleButton;
