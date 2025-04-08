import clsx from 'clsx';
import { useSidebarContext } from './context';
import { showItemsClass } from './utils';

const SidebarProfile = () => {
  const { userProfile, isOpen } = useSidebarContext();

  return (
    <a
      href={userProfile?.link ?? '#'}
      className={clsx(
        'dgs-ui-kit-mb-4 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse',
        { 'dgs-ui-kit-pointer-events-none': !userProfile?.link },
      )}
    >
      <img
        src={userProfile?.image}
        alt={userProfile?.name ?? 'user_avatar'}
        className="dgs-ui-kit-size-12 dgs-ui-kit-rounded-full dgs-ui-kit-shrink-0"
      />
      <div className={clsx('dgs-ui-kit-flex dgs-ui-kit-flex-col', showItemsClass(isOpen))}>
        <p className="dgs-ui-kit-font-p3-medium dgs-ui-kit-text-gray-700">{userProfile?.name}</p>
        <p className="dgs-ui-kit-font-p3-regular dgs-ui-kit-text-gray-400">
          {userProfile?.description}
        </p>
      </div>
    </a>
  );
};

export default SidebarProfile;
