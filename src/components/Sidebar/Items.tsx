import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { Fragment, useCallback, useEffect, useState, type FC } from 'react';
import {
  ACTIVE_CLASS,
  DISABLED_CLASS,
  ITEMS_SHARED_CLASS,
  SECOND_LEVEL_ACTIVE_CLASS,
} from './constants';
import { useSidebarContext } from './context';
import SidebarSearchInput from './SearchInput';
import type { FirstLevelSidebarItem, SecondLevelSidebarItem } from './types';
import { getSecondLevelItemContent, searchItems, showItemsClass } from './utils';
import { AccordionGroup, AccordionItem } from '../Accordion';
import Badge from '../Badge';
import Divider from '../Divider';

function findSecondLevelItemWithActiveChild(
  items: FirstLevelSidebarItem[],
): SecondLevelSidebarItem | null {
  let foundedItem: SecondLevelSidebarItem | null = null;

  items.some((FLevel) => {
    return FLevel.children?.some((SLevel) => {
      if (SLevel.children?.some((TLevel) => TLevel.active)) {
        foundedItem = SLevel;
        return true;
      }
      return false;
    });
  });

  return foundedItem;
}

const SidebarItems: FC = () => {
  const { isOpen, searchInput = true, items } = useSidebarContext();
  const [search, setSearch] = useState('');
  const [innerItems, setInnerItems] = useState(items ?? []);
  const secondLevelItemWithActiveChild = findSecondLevelItemWithActiveChild(innerItems);

  const debouncedSearch = useCallback(
    debounce((searchValue: string) => {
      setInnerItems(searchItems(innerItems, searchValue) as FirstLevelSidebarItem[]);
    }, 800),
    [],
  );

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value;
    setSearch(searchValue);
    debouncedSearch(searchValue);
  }

  function handleSearchClear() {
    setSearch('');
    setInnerItems(items ?? []);
  }

  useEffect(() => {
    if (search) handleSearchClear();
  }, [isOpen]);

  return (
    <div className="dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:-mx-4 dgsuikit:h-3/4 dgsuikit:no-scrollbar">
      {Boolean(searchInput) && (
        <SidebarSearchInput
          value={search}
          onChange={handleSearchChange}
        />
      )}
      <div className="dgsuikit:space-y-6 dgsuikit:px-4">
        {innerItems.map((item, index) => (
          <Fragment key={item.title}>
            <div
              className={clsx(
                'dgsuikit:font-p2-regular dgsuikit:text-gray-400',
                showItemsClass(isOpen),
              )}
            >
              {item.title}
            </div>
            <AccordionGroup
              defaultActiveKey={
                secondLevelItemWithActiveChild
                  ? secondLevelItemWithActiveChild.link || secondLevelItemWithActiveChild.title
                  : undefined
              }
              className="dgsuikit:mt-4 dgsuikit:space-y-2"
            >
              {item.children?.map((secondLevelItem) =>
                secondLevelItem.link ? (
                  <a
                    key={secondLevelItem.link}
                    href={secondLevelItem.link}
                    className={clsx(
                      'dgsuikit:pr-3',
                      secondLevelItem.disabled && DISABLED_CLASS,
                      secondLevelItem.active && SECOND_LEVEL_ACTIVE_CLASS,
                      isOpen ? 'dgsuikit:pl-9' : 'dgsuikit:pl-3',
                      ITEMS_SHARED_CLASS,
                    )}
                  >
                    {getSecondLevelItemContent(secondLevelItem, isOpen)}
                  </a>
                ) : (
                  <AccordionItem
                    key={secondLevelItem.link ?? secondLevelItem.title}
                    accordionKey={secondLevelItem.link ?? secondLevelItem.title}
                    className={clsx('dgsuikit:!p-0', secondLevelItem.disabled && DISABLED_CLASS)}
                    title={getSecondLevelItemContent(secondLevelItem, isOpen)}
                    hideDivider
                    hideArrow={!isOpen || secondLevelItem.disabled}
                    disable={!isOpen || secondLevelItem.disabled}
                    titleClassName={clsx(
                      'dgsuikit:[&_>div:first-child]:flex-1 dgsuikit:[&_>div:first-child]:pl-1',
                      isOpen ? 'dgsuikit:px-3' : 'dgsuikit:!justify-center',
                      ((secondLevelItemWithActiveChild?.link &&
                        secondLevelItemWithActiveChild?.link === secondLevelItem.link) ||
                        secondLevelItemWithActiveChild?.title === secondLevelItem.title) &&
                        SECOND_LEVEL_ACTIVE_CLASS,
                      ITEMS_SHARED_CLASS,
                    )}
                  >
                    {secondLevelItem.children?.map((thirdLevelItem) => (
                      <a
                        key={thirdLevelItem.link}
                        href={thirdLevelItem.link}
                        className={clsx(
                          'dgsuikit:flex dgsuikit:justify-between dgsuikit:h-10 dgsuikit:pl-9 dgsuikit:pr-11 dgsuikit:py-2 dgsuikit:mt-1 dgsuikit:first:mt-0',
                          thirdLevelItem.disabled && DISABLED_CLASS,
                          thirdLevelItem.active && ACTIVE_CLASS,
                          ITEMS_SHARED_CLASS,
                        )}
                      >
                        <p>{thirdLevelItem.title}</p>
                        {thirdLevelItem.badgeCount && (
                          <Badge
                            valueType="number"
                            value={thirdLevelItem.badgeCount}
                            color="error"
                            type="twoTone"
                            size="small"
                          />
                        )}
                      </a>
                    ))}
                  </AccordionItem>
                ),
              )}
            </AccordionGroup>
            {index !== innerItems.length - 1 && <Divider type="horizontal" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarItems;
