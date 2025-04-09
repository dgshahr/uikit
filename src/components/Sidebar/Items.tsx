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
import type { FirstLevelSidebarItem } from './types';
import { getSecondLevelItemContent, searchItems, showItemsClass } from './utils';
import { AccordionGroup, AccordionItem } from '../Accordion';
import Badge from '../Badge';
import Divider from '../Divider';

const SidebarItems: FC = () => {
  const { isOpen, searchInput = true, items } = useSidebarContext();
  const [search, setSearch] = useState('');
  const [innerItems, setInnerItems] = useState(items ?? []);

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
    <div className="dgs-ui-kit-overflow-y-auto dgs-ui-kit-overflow-x-hidden -dgs-ui-kit-mx-4 dgs-ui-kit-h-3/4 no-scrollbar">
      {Boolean(searchInput) && (
        <SidebarSearchInput
          value={search}
          onChange={handleSearchChange}
        />
      )}
      <div className="dgs-ui-kit-space-y-6 dgs-ui-kit-px-4">
        {innerItems.map((item, index) => (
          <Fragment key={item.title}>
            <div
              className={clsx(
                'dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-400',
                showItemsClass(isOpen),
              )}
            >
              {item.title}
            </div>
            <AccordionGroup className="dgs-ui-kit-mt-4 dgs-ui-kit-space-y-2">
              {item.children?.map((secondLevelItem) =>
                secondLevelItem.link ? (
                  <a
                    key={secondLevelItem.link}
                    href={secondLevelItem.link}
                    className={clsx(
                      'dgs-ui-kit-pr-3',
                      secondLevelItem.disabled && DISABLED_CLASS,
                      secondLevelItem.active && SECOND_LEVEL_ACTIVE_CLASS,
                      isOpen ? 'dgs-ui-kit-pl-9' : 'dgs-ui-kit-pl-3',
                      ITEMS_SHARED_CLASS,
                    )}
                  >
                    {getSecondLevelItemContent(secondLevelItem, isOpen)}
                  </a>
                ) : (
                  <AccordionItem
                    key={secondLevelItem.link ?? secondLevelItem.title}
                    className={clsx('!dgs-ui-kit-p-0', secondLevelItem.disabled && DISABLED_CLASS)}
                    title={getSecondLevelItemContent(secondLevelItem, isOpen)}
                    hideDivider
                    hideArrow={!isOpen || secondLevelItem.disabled}
                    disable={!isOpen || secondLevelItem.disabled}
                    titleClassName={clsx(
                      '[&_>div:first-child]:dgs-ui-kit-flex-1 [&_>div:first-child]:dgs-ui-kit-pl-1',
                      isOpen ? 'dgs-ui-kit-px-3' : '!dgs-ui-kit-justify-center',
                      secondLevelItem.children?.find((thirdLevelItem) => thirdLevelItem.active) &&
                        SECOND_LEVEL_ACTIVE_CLASS,
                      ITEMS_SHARED_CLASS,
                    )}
                  >
                    {secondLevelItem.children?.map((thirdLevelItem) => (
                      <a
                        key={thirdLevelItem.link}
                        href={thirdLevelItem.link}
                        className={clsx(
                          'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-h-10 dgs-ui-kit-pl-9 dgs-ui-kit-pr-11 dgs-ui-kit-py-2 dgs-ui-kit-mt-1 first:dgs-ui-kit-mt-0',
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
