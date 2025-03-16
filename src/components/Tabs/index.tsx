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
        'dgs-ui-kit-flex dgs-ui-kit-border-b dgs-ui-kit-border-gray-200 dgs-ui-kit-border-solid',
        fullWidth ? 'dgs-ui-kit-w-full' : 'dgs-ui-kit-w-fit',
        className,
      )}
    >
      {items.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          disabled={tab.disabled}
          className={clsx('dgs-ui-kit-group', {
            'dgs-ui-kit-flex-1': fullWidth && fullWidthButtons,
          })}
        >
          <div
            className={clsx(
              'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-px-3 dgs-ui-kit-py-4 dgs-ui-kit-transition',
              {
                'dgs-ui-kit-text-primary-500': activeKey === tab.key,
                'dgs-ui-kit-text-gray-500 group-hover:dgs-ui-kit-text-gray-600':
                  activeKey !== tab.key,
                'dgs-ui-kit-cursor-not-allowed dgs-ui-kit-opacity-40': tab.disabled,
                'dgs-ui-kit-justify-center': fullWidth && fullWidthButtons,
              },
              tabItemClassName,
            )}
          >
            {tab.icon ? (
              <div
                className={clsx('dgs-ui-kit-transition', {
                  'dgs-ui-kit-text-gray-400 group-hover:dgs-ui-kit-text-gray-500':
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
                  'dgs-ui-kit-opacity-60': activeKey !== tab.key,
                  '!dgs-ui-kit-opacity-100': tab.disabled,
                })}
                color={activeKey === tab.key ? 'primary' : 'gray'}
              />
            )}
          </div>
          <div
            className={clsx(
              'dgs-ui-kit-w-full dgs-ui-kit-h-1 dgs-ui-kit-rounded-t dgs-ui-kit-transition',
              {
                'dgs-ui-kit-bg-gray-300 dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100':
                  tab.key !== activeKey && !tab.disabled,
                'dgs-ui-kit-bg-primary-500': tab.key === activeKey,
              },
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default Tabs;
