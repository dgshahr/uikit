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
    'dgs-ui-kit-transition-opacity dgs-ui-kit-whitespace-pre dgs-ui-kit-overflow-hidden',
    isOpen ? 'dgs-ui-kit-opacity-100' : 'dgs-ui-kit-opacity-0',
    DURATION_CLASS,
  );

export function getSecondLevelItemContent(
  item: SecondLevelSidebarItem,
  isOpen: SidebarProps['isOpen'],
) {
  return (
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-items-center [&_svg]:dgs-ui-kit-size-6 [&_svg]:dgs-ui-kit-shrink-0 dgs-ui-kit-min-h-12 dgs-ui-kit-text-start',
        isOpen ? 'dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse' : 'dgs-ui-kit-justify-center',
      )}
    >
      {item.icon}
      <div
        className={clsx(
          'dgs-ui-kit-font-p2-regular dgs-ui-kit-line-clamp-1 !dgs-ui-kit-transition-[width,opacity]',
          isOpen ? 'dgs-ui-kit-w-full' : 'dgs-ui-kit-w-0',
          showItemsClass,
        )}
      >
        {item.title}
      </div>
      {item.badgeCount && (
        <Badge
          className={clsx('dgs-ui-kit-shrink-0', {
            '!dgs-ui-kit-absolute dgs-ui-kit-top-0 dgs-ui-kit-left-0': !isOpen,
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
