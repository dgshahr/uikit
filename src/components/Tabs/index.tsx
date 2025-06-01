import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import Badge from '../Badge';
import '@/src/styles.css';

interface ITabItem {
  key: string | number;
  title: string;
  icon?: ReactNode;
  badgeNumber?: number;
  disabled?: boolean;
}

interface TabsPropsBase {
  activeKey: ITabItem['key'];
  onChange: (key: ITabItem['key']) => void;
  items: ITabItem[];
  className?: string;
  tabItemClassName?: string;
  fullWidth?: boolean;
}

interface TabsPropsFullWidth extends TabsPropsBase {
  fullWidth: true;
  fullWidthButtons?: boolean;
}

interface TabsPropsAutoWidth extends Omit<TabsPropsBase, 'fullWidthButtons'> {
  fullWidth?: false;
}

type TabsProps = TabsPropsFullWidth | TabsPropsAutoWidth;

const Tabs: FC<TabsProps> = (props) => {
  const { activeKey, onChange, items, className, tabItemClassName, fullWidth } = props;

  const fullWidthButtons = (props as TabsPropsFullWidth).fullWidthButtons;

  return (
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:border-b dgsuikit:border-gray-200 dgsuikit:border-solid',
        fullWidth ? 'dgsuikit:w-full' : 'dgsuikit:w-fit',
        className,
      )}
    >
      {items.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          disabled={tab.disabled}
          className={clsx('dgsuikit:group', {
            'dgsuikit:flex-1': fullWidth && fullWidthButtons,
          })}
        >
          <div
            className={clsx(
              'dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-2 dgsuikit:px-3 dgsuikit:py-4 dgsuikit:transition',
              {
                'dgsuikit:text-primary-500': activeKey === tab.key,
                'dgsuikit:text-gray-500 dgsuikit:group-hover:text-gray-600': activeKey !== tab.key,
                'dgsuikit:cursor-not-allowed dgsuikit:opacity-40': tab.disabled,
                'dgsuikit:justify-center': fullWidth && fullWidthButtons,
              },
              tabItemClassName,
            )}
          >
            {tab.icon ? (
              <div
                className={clsx('dgsuikit:transition', {
                  'dgsuikit:text-gray-400 dgsuikit:group-hover:text-gray-500':
                    tab.key !== activeKey,
                })}
              >
                {tab.icon}
              </div>
            ) : null}
            <div className="">{tab.title}</div>
            {typeof tab.badgeNumber === 'number' && (
              <Badge
                valueType="number"
                value={tab.badgeNumber}
                size="small"
                className={clsx({
                  'dgsuikit:opacity-60': activeKey !== tab.key,
                  'dgsuikit:!opacity-100': tab.disabled,
                })}
                color={activeKey === tab.key ? 'primary' : 'gray'}
              />
            )}
          </div>
          <div
            className={clsx('dgsuikit:w-full dgsuikit:h-1 dgsuikit:rounded-t dgsuikit:transition', {
              'dgsuikit:bg-gray-300 dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100':
                tab.key !== activeKey && !tab.disabled,
              'dgsuikit:bg-primary-500': tab.key === activeKey,
            })}
          />
        </button>
      ))}
    </div>
  );
};

export default Tabs;
