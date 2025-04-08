import clsx from 'clsx';
import { type FC } from 'react';
import { useSidebarContext } from './context';

const SidebarLogoImage: FC = () => {
  const { isOpen, logo } = useSidebarContext();
  return (
    <div className="dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-items-center dgs-ui-kit-mb-8">
      <img
        {...logo}
        alt={logo?.alt ?? 'Logo'}
        src={isOpen ? logo?.open : logo?.close}
        className={clsx('dgs-ui-kit-h-12 dgs-ui-kit-w-full', logo?.className)}
      />
    </div>
  );
};

export default SidebarLogoImage;
