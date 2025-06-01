import clsx from 'clsx';
import { type FC } from 'react';
import { useSidebarContext } from './context';

const SidebarLogoImage: FC = () => {
  const { isOpen, logo } = useSidebarContext();
  return (
    <div className="dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center dgsuikit:mb-8">
      <img
        {...logo}
        alt={logo?.alt ?? 'Logo'}
        src={isOpen ? logo?.open : logo?.close}
        className={clsx('dgsuikit:h-12 dgsuikit:w-full', logo?.className)}
      />
    </div>
  );
};

export default SidebarLogoImage;
