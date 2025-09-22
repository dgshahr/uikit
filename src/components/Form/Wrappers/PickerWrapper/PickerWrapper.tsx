'use client';

import clsx from 'clsx';
import { useState, type FC, type PropsWithChildren } from 'react';
import Drawer from '@/src/components/Drawer';
import { useFlipPosition } from '@/src/hooks/useFlipPosition';
import { useOutsideClick } from '@/src/hooks/useOutsideClick';
import IconArrowDown2 from '@/src/icons/IconArrowDown2';
import { pickerWrapperContext } from './contexts';
import type { PickerWrapperProps, PopperPosition } from './type';
import Input from '../../Input';

import '@/src/styles.css';

const DURATION_CLASS = 'dgsuikit:duration-300';
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
    popoverPosition,
  } = props;
  const popoverInitialPosition = popoverPosition ?? 'bottom-left';
  const [isShowWrapper, setIsShowWrapper] = useState(false);
  const [isWrapperInDom, setIsWrapperInDom] = useState(false);
  const [position, setPosition] = useState<PopperPosition>(popoverInitialPosition);
  let transitionTimeout: ReturnType<typeof setTimeout>;

  const { anchorRef, popperRef } = useFlipPosition<HTMLButtonElement, HTMLDivElement>({
    initialPosition: popoverInitialPosition,
    minVisible: 180,
    onPositionChange(newPosition) {
      setPosition((prev) => (prev === newPosition ? prev : newPosition));
    },
  });

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
    'dgsuikit:!cursor-not-allowed': disabled,
    'dgsuikit:!cursor-wait': isLoading,
    'dgsuikit:!cursor-pointer': !isLoading && !disabled,
  });

  return (
    <div
      ref={containerRef}
      className={clsx('dgsuikit:relative', wrapperClassName)}
    >
      <button
        ref={anchorRef}
        type="button"
        className={clsx('dgsuikit:w-full', cursorClass)}
        onClick={toggleWrapperVisibility}
      >
        {customInput ? (
          customInput(isShowWrapper)
        ) : (
          <Input
            leftIcon={
              isLoading ? (
                <div className="dot-flashing dgsuikit:mr-2" />
              ) : (
                <IconArrowDown2
                  width={20}
                  height={20}
                  className={clsx('dgsuikit:transition', DURATION_CLASS, {
                    'dgsuikit:rotate-180': isShowWrapper,
                  })}
                />
              )
            }
            containerClassName={clsx(cursorClass, {
              'dgsuikit:items-baseline': isLoading,
            })}
            className={clsx('dgsuikit:caret-transparent', cursorClass)}
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
                ref={popperRef}
                className={clsx(
                  'dgsuikit:absolute dgsuikit:min-w-[300px] dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:shadow-lg dgsuikit:w-full dgsuikit:max-h-[360px] dgsuikit:transition-all dgsuikit:bg-white dgsuikit:z-50 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-200 dgsuikit:pb-3',
                  DURATION_CLASS,
                  isShowWrapper
                    ? 'dgsuikit:opacity-100'
                    : 'dgsuikit:opacity-0 dgsuikit:max-h-0 dgsuikit:overflow-y-hidden',
                  {
                    'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)]':
                      position.includes('bottom'),
                    'dgsuikit:top-0 dgsuikit:translate-y-[calc(-100%-8px)]':
                      position.includes('top'),
                  },
                  {
                    'dgsuikit:right-0': position.endsWith('left'),
                    'dgsuikit:left-0': position.endsWith('right'),
                    'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2': position.endsWith('center'),
                  },
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
                  'dgsuikit:!pb-3 dgsuikit:!px-0',
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
