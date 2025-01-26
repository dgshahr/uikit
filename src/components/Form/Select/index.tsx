'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useOutsideClick } from '@/src/hooks/useOutsideClick';
import ArrowDown2Icon from '@/src/icons/ArrowDown2';
import Options from './Options';
import type { SelectProps } from './types';
import Drawer from '../../Drawer';
import Input from '../Input';

import '@/src/styles.css';

const DURATION_CLASS = 'dgs-ui-kit-duration-300';
// it should be bigger than duration class to show transition fully
const REMOVE_CONTAINER_TIMEOUT = 400;

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
    isLoading,
    searchable = true,
    disabled = isLoading,
  } = props;
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [isOptionsInDom, setIsOptionsInDom] = useState(false);

  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    if (optionsContainer === 'popover' && isShowOptions) {
      setIsShowOptions(false);
      setTimeout(() => {
        setIsOptionsInDom(false);
      }, REMOVE_CONTAINER_TIMEOUT);
    }
  });

  function onSelectClick() {
    if (disabled || isLoading) return;
    const newState = !isShowOptions;

    if (newState) {
      setIsOptionsInDom(true);
      setTimeout(() => {
        setIsShowOptions(true);
      }, 0);
    } else {
      setIsShowOptions(false);
      setTimeout(() => {
        setIsOptionsInDom(false);
      }, REMOVE_CONTAINER_TIMEOUT);
    }
  }

  const optionsProps = {
    ...props,
    setIsShowOptions,
  };

  const cursorClass = clsx({
    '!dgs-ui-kit-cursor-not-allowed': disabled,
    '!dgs-ui-kit-cursor-wait': isLoading,
    '!dgs-ui-kit-cursor-pointer': !isLoading && !disabled,
  });

  return (
    <div
      ref={containerRef}
      className={clsx('dgs-ui-kit-relative', className)}
    >
      <button
        className={clsx('dgs-ui-kit-w-full', cursorClass)}
        onClick={onSelectClick}
      >
        {customInput ? (
          customInput(isShowOptions)
        ) : (
          <Input
            leftIcon={
              isLoading ? (
                <div className="dot-flashing dgs-ui-kit-mr-2" />
              ) : (
                <ArrowDown2Icon
                  width={20}
                  height={20}
                  className={clsx('dgs-ui-kit-transition', DURATION_CLASS, {
                    'dgs-ui-kit-rotate-180': isShowOptions,
                  })}
                />
              )
            }
            containerClassName={clsx(cursorClass, {
              'dgs-ui-kit-items-baseline': isLoading,
            })}
            className={clsx('dgs-ui-kit-caret-transparent', cursorClass)}
            value={findValue(value, options)}
            disabled={disabled}
            {...inputProps}
          />
        )}
      </button>
      {isOptionsInDom && (
        <>
          {optionsContainer === 'popover' ? (
            <div
              className={clsx(
                'dgs-ui-kit-absolute dgs-ui-kit-min-w-[300px] dgs-ui-kit-bottom-0 dgs-ui-kit-right-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-overflow-y-auto dgs-ui-kit-overflow-x-hidden dgs-ui-kit-shadow-lg dgs-ui-kit-w-full dgs-ui-kit-max-h-[360px] dgs-ui-kit-transition-all dgs-ui-kit-bg-white dgs-ui-kit-z-50 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200 dgs-ui-kit-pb-3',
                DURATION_CLASS,
                isShowOptions
                  ? 'dgs-ui-kit-opacity-100'
                  : 'dgs-ui-kit-opacity-0 dgs-ui-kit-max-h-0 dgs-ui-kit-overflow-y-hidden',
                { 'dgs-ui-kit-pt-3': !searchable },
                popoverClassName,
              )}
            >
              <Options {...optionsProps} />
            </div>
          ) : (
            <Drawer
              open={isShowOptions}
              onClose={() => setIsShowOptions(false)}
              containerClassName={clsx(
                '!dgs-ui-kit-pb-3 !dgs-ui-kit-px-0',
                searchable ? '!dgs-ui-kit-pt-0' : '!dgs-ui-kit-pt-3',
              )}
              {...drawerProps}
            >
              <Options {...optionsProps} />
            </Drawer>
          )}
        </>
      )}
    </div>
  );
};

export default Select;
