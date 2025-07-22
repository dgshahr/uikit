import clsx from 'clsx';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import { useSidebarContext } from './context';
import { showItemsClass } from './utils';

const SidebarProfile = () => {
  const { userProfile, isOpen } = useSidebarContext();

  return (
    <a
      href={userProfile?.link ?? '#'}
      className={clsx(
        'dgsuikit:mb-8 dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-center dgsuikit:items-center',
        {
          'dgsuikit:pointer-events-none': !userProfile?.link,
        },
      )}
    >
      <img
        src={userProfile?.image}
        alt={userProfile?.name ?? 'user_avatar'}
        className={clsx(
          'dgsuikit:rounded-full dgsuikit:shrink-0',
          isOpen ? 'dgsuikit:size-20' : 'dgsuikit:size-12',
        )}
      />
      <div
        className={clsx('dgsuikit:mt-2 dgsuikit:w-full dgsuikit:relative', showItemsClass(isOpen))}
      >
        <p className="dgsuikit:font-p3-medium dgsuikit:text-gray-700 dgsuikit:text-center">
          {userProfile?.name}
        </p>
        <p className="dgsuikit:font-p3-regular dgsuikit:text-gray-400 dgsuikit:text-center">
          {userProfile?.description}
        </p>
        {userProfile?.link && (
          <IconArrowLeft2 className="dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:left-0 dgsuikit:text-3xl dgsuikit:text-gray-500 dgsuikit:p-1 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-gray-200" />
        )}
      </div>
    </a>
  );
};

export default SidebarProfile;
