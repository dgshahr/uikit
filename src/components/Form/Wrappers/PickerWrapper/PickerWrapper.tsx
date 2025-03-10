'use client';

import clsx from 'clsx';
import { useState, type FC, type PropsWithChildren } from 'react';
import Drawer from '@/src/components/Drawer';
import { useOutsideClick } from '@/src/hooks/useOutsideClick';
import IconArrowDown2 from '@/src/icons/IconArrowDown2';
import { pickerWrapperContext } from './contexts';
import type { PickerWrapperProps } from './type';
import Input from '../../Input';

import '@/src/styles.css';

const DURATION_CLASS = 'dgs-ui-kit-duration-300';
// it should be bigger than duration class to show transition fully
const REMOVE_CONTAINER_TIMEOUT = 400;

const PickerWrapper: FC<PropsWithChildren<PickerWrapperProps>> = (props) => {
  const {
    dropdownType = 'popover',
    disabled,
    isLoading,
    wrapperClassName,
    customInput,
    children,
    drawerProps,
    inputProps,
    popoverClassName,
  } = props;
  const [isShowWrapper, setIsShowWrapper] = useState(false);
  const [isWrapperInDom, setIsWrapperInDom] = useState(false);
  let transitionTimeout: ReturnType<typeof setTimeout>;

  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    if (dropdownType === 'popover' && isShowWrapper) {
      setIsShowWrapper(false);
      if (transitionTimeout) clearTimeout(transitionTimeout);
      transitionTimeout = setTimeout(() => {
        setIsWrapperInDom(false);
      }, REMOVE_CONTAINER_TIMEOUT);
    }
  });

  function toggleWrapperVisibility() {
    if (disabled || isLoading) return;
    const newState = !isWrapperInDom;

    if (transitionTimeout) clearTimeout(transitionTimeout);

    if (newState) {
      setIsWrapperInDom(true);
      transitionTimeout = setTimeout(() => {
        setIsShowWrapper(true);
      }, 0);
    } else {
      setIsShowWrapper(false);
      transitionTimeout = setTimeout(() => {
        setIsWrapperInDom(false);
      }, REMOVE_CONTAINER_TIMEOUT);
    }
  }

  const cursorClass = clsx({
    '!dgs-ui-kit-cursor-not-allowed': disabled,
    '!dgs-ui-kit-cursor-wait': isLoading,
    '!dgs-ui-kit-cursor-pointer': !isLoading && !disabled,
  });

  return (
    <div
      ref={containerRef}
      className={clsx('dgs-ui-kit-relative', wrapperClassName)}
    >
      <button
        className={clsx('dgs-ui-kit-w-full', cursorClass)}
        onClick={toggleWrapperVisibility}
      >
        {customInput ? (
          customInput(isShowWrapper)
        ) : (
          <Input
            leftIcon={
              isLoading ? (
                <div className="dot-flashing dgs-ui-kit-mr-2" />
              ) : (
                <IconArrowDown2
                  width={20}
                  height={20}
                  className={clsx('dgs-ui-kit-transition', DURATION_CLASS, {
                    'dgs-ui-kit-rotate-180': isShowWrapper,
                  })}
                />
              )
            }
            containerClassName={clsx(cursorClass, {
              'dgs-ui-kit-items-baseline': isLoading,
            })}
            className={clsx('dgs-ui-kit-caret-transparent', cursorClass)}
            disabled={disabled}
            {...inputProps}
          />
        )}
      </button>
      <pickerWrapperContext.Provider
        value={{
          toggleWrapperVisibility,
        }}
      >
        {isWrapperInDom && (
          <>
            {dropdownType === 'popover' ? (
              <div
                className={clsx(
                  'dgs-ui-kit-absolute dgs-ui-kit-min-w-[300px] dgs-ui-kit-bottom-0 dgs-ui-kit-right-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-overflow-y-auto dgs-ui-kit-overflow-x-hidden dgs-ui-kit-shadow-lg dgs-ui-kit-w-full dgs-ui-kit-max-h-[360px] dgs-ui-kit-transition-all dgs-ui-kit-bg-white dgs-ui-kit-z-50 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200 dgs-ui-kit-pb-3',
                  DURATION_CLASS,
                  isShowWrapper
                    ? 'dgs-ui-kit-opacity-100'
                    : 'dgs-ui-kit-opacity-0 dgs-ui-kit-max-h-0 dgs-ui-kit-overflow-y-hidden',
                  popoverClassName,
                )}
              >
                {children}
              </div>
            ) : (
              <Drawer
                {...drawerProps}
                open={isShowWrapper}
                onClose={() => setIsShowWrapper(false)}
                containerClassName={clsx(
                  '!dgs-ui-kit-pb-3 !dgs-ui-kit-px-0',
                  drawerProps?.containerClassName,
                )}
              >
                {children}
              </Drawer>
            )}
          </>
        )}
      </pickerWrapperContext.Provider>
    </div>
  );
};

export default PickerWrapper;
