import clsx from 'clsx';
import { useSidebarContext } from './context';
import { showItemsClass } from './utils';

const SidebarProfile = () => {
  const { userProfile, isOpen } = useSidebarContext();

  return (
    <a
      href={userProfile?.link ?? '#'}
      className={clsx('dgsuikit:mb-4 dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-2', {
        'dgsuikit:pointer-events-none': !userProfile?.link,
      })}
    >
      <img
        src={userProfile?.image}
        alt={userProfile?.name ?? 'user_avatar'}
        className="dgsuikit:size-12 dgsuikit:rounded-full dgsuikit:shrink-0"
      />
      <div className={clsx('dgsuikit:flex dgsuikit:flex-col', showItemsClass(isOpen))}>
        <p className="dgsuikit:font-p3-medium dgsuikit:text-gray-700">{userProfile?.name}</p>
        <p className="dgsuikit:font-p3-regular dgsuikit:text-gray-400">
          {userProfile?.description}
        </p>
      </div>
    </a>
  );
};

export default SidebarProfile;
