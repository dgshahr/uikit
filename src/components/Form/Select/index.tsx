import clsx from 'clsx';
import { useState } from 'react';
import { useOutsideClick } from '@/src/hooks/useOutsideClick';
import ArrowDown2Icon from '@/src/icons/ArrowDown2';
import Options from './Options';
import type { SelectProps } from './types';
import Drawer from '../../Drawer';
import Input from '../Input';

const DURATION_CLASS = 'dgs-ui-kit-duration-300';

function findValue<T>(value: T | T[], options: SelectProps<T>['options']) {
  if (Array.isArray(value))
    return options
      .filter((option) => value.includes(option.value))
      .map((option) => option.label)
      .join(', ');

  return options.find((option) => option.value === value)?.label ?? '';
}

const Select = <T,>(props: SelectProps<T>) => {
  const {
    options,
    optionsContainer = 'popover',
    className,
    customInput,
    inputProps,
    drawerProps,
    popoverClassName,
    value,
  } = props;
  const [isShowOptions, setIsShowOptions] = useState(false);

  const containerRef = useOutsideClick<HTMLDivElement>(
    () => optionsContainer === 'popover' && setIsShowOptions(false),
  );

  const optionsProps = {
    ...props,
    setIsShowOptions,
  };

  return (
    <div
      ref={containerRef}
      className={clsx('dgs-ui-kit-relative', className)}
    >
      <button onClick={() => setIsShowOptions((state) => !state)}>
        {customInput ? (
          customInput(isShowOptions)
        ) : (
          <Input
            wrapperClassName="dgs-ui-kit-cursor-default"
            leftIcon={
              <ArrowDown2Icon
                width={20}
                height={20}
                className={clsx('dgs-ui-kit-transition', DURATION_CLASS, {
                  'dgs-ui-kit-rotate-180': isShowOptions,
                })}
              />
            }
            containerClassName="!dgs-ui-kit-cursor-pointer"
            className="dgs-ui-kit-cursor-pointer dgs-ui-kit-caret-transparent"
            value={findValue(value, options)}
            {...inputProps}
          />
        )}
      </button>
      {optionsContainer === 'popover' ? (
        <div
          className={clsx(
            'dgs-ui-kit-absolute dgs-ui-kit-min-w-[300px] dgs-ui-kit-bottom-0 dgs-ui-kit-right-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-overflow-y-auto dgs-ui-kit-overflow-x-hidden dgs-ui-kit-shadow-lg dgs-ui-kit-w-full dgs-ui-kit-max-h-[360px] dgs-ui-kit-transition dgs-ui-kit-bg-white dgs-ui-kit-z-50 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200 dgs-ui-kit-py-3',
            DURATION_CLASS,
            isShowOptions ? 'dgs-ui-kit-opacity-100' : 'dgs-ui-kit-opacity-0 dgs-ui-kit-scale-y-0',
            popoverClassName,
          )}
        >
          <Options {...optionsProps} />
        </div>
      ) : (
        <Drawer
          open={isShowOptions}
          onClose={() => setIsShowOptions(false)}
          containerClassName="!dgs-ui-kit-py-3 !dgs-ui-kit-px-0"
          {...drawerProps}
        >
          <Options {...optionsProps} />
        </Drawer>
      )}
    </div>
  );
};

export default Select;
