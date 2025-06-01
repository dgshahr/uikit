import clsx from 'clsx';
import { DURATION_CLASS } from './constants';
import type {
  FirstLevelSidebarItem,
  SecondLevelSidebarItem,
  SidebarProps,
  ThirdLevelSidebarItem,
} from './types';
import Badge from '../Badge';

export const showItemsClass = (isOpen: SidebarProps['isOpen']) =>
  clsx(
    'dgsuikit:transition-opacity dgsuikit:whitespace-pre dgsuikit:overflow-hidden',
    isOpen ? 'dgsuikit:opacity-100' : 'dgsuikit:opacity-0',
    DURATION_CLASS,
  );

export function getSecondLevelItemContent(
  item: SecondLevelSidebarItem,
  isOpen: SidebarProps['isOpen'],
) {
  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:items-center dgsuikit:[&_svg]:size-6 dgsuikit:[&_svg]:shrink-0 dgsuikit:min-h-12 dgsuikit:text-start',
        isOpen ? 'dgsuikit:space-x-2' : 'dgsuikit:justify-center',
      )}
    >
      {item.icon}
      <div
        className={clsx(
          'dgsuikit:font-p2-regular dgsuikit:line-clamp-1 dgsuikit:!transition-[width,opacity]',
          isOpen ? 'dgsuikit:w-full' : 'dgsuikit:w-0',
          showItemsClass,
        )}
      >
        {item.title}
      </div>
      {item.badgeCount && (
        <Badge
          className={clsx('dgsuikit:shrink-0', {
            'dgsuikit:!absolute dgsuikit:top-0 dgsuikit:left-0': !isOpen,
          })}
          value={item.badgeCount}
          valueType="number"
          color="error"
          size="small"
        />
      )}
    </div>
  );
}

type ItemsUnionType = FirstLevelSidebarItem | SecondLevelSidebarItem | ThirdLevelSidebarItem;
export function searchItems(items: ItemsUnionType[], searchValue: string): ItemsUnionType[] {
  return items
    .map((item) => {
      if ('children' in item && item.children) {
        const filteredChildren = searchItems(item.children, searchValue);
        if (filteredChildren.length > 0) {
          return { ...item, children: filteredChildren };
        }
      }

      if (item.title.includes(searchValue)) {
        return { ...item };
      }

      return null;
    })
    .filter((item): item is ItemsUnionType => Boolean(item));
}
