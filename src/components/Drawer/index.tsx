'use client';

import clsx from 'clsx';
import { useEffect, useState, type CSSProperties, type FC, type ReactNode } from 'react';
import '@/src/styles.css';
import { createPortal } from 'react-dom';
import IconCloseRemove from '@/src/icons/IconCloseRemove';
import { isBrowser } from '@/src/utils/isBrowser';

const ANIMATION_DURATION = 150;
let openDrawerCount = 0;
let updateOpenDrawerCountTimeout: ReturnType<typeof setTimeout>;

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  persist?: boolean;
  position?: 'bottom' | 'top' | 'right' | 'left' | 'center';
  className?: string;
  maskClassName?: string;
  containerClassName?: string;
  padding?: number;
  width?: CSSProperties['width'];
  header?: {
    title?: string;
    description?: string;
    haveCloseIcon?: boolean;
    actionElement?: ReactNode;
    containerClassName?: string;
  };
  footer?: {
    element?: ReactNode;
    containerClassName?: string;
  };
  children?: ReactNode | undefined;
  containerElement?: Element | null;
  havePopover?: boolean;
}

function getSize({
  position,
  padding = 0,
  item,
}: {
  position: DrawerProps['position'];
  padding: DrawerProps['padding'];
  item: 'height' | 'width';
}) {
  if (position === 'center') return 'auto';
  else if (item === 'width') {
    if (position === 'bottom' || position === 'top') return `calc(100% - ${padding * 2}px)`;
    else return `auto`;
  } else {
    if (position === 'bottom' || position === 'top') return 'auto';
    else return `calc(100% - ${padding * 2}px)`;
  }
}

function getRadius({
  position,
  padding = 0,
}: {
  position: DrawerProps['position'];
  padding: DrawerProps['padding'];
}) {
  const defaultRadius = 'dgsuikit:rounded-2xl';
  if (padding > 0 || position === 'center') return defaultRadius;
  switch (position) {
    case 'bottom':
      return `${defaultRadius} dgsuikit:rounded-b-none`;
    case 'left':
      return `${defaultRadius} dgsuikit:rounded-l-none`;
    case 'right':
      return `${defaultRadius} dgsuikit:rounded-r-none`;
    case 'top':
      return `${defaultRadius} dgsuikit:rounded-t-none`;
    default:
      return defaultRadius;
  }
}

const Drawer: FC<DrawerProps> = (props) => {
  const {
    open,
    onClose,
    persist,
    position = 'bottom',
    children,
    className,
    maskClassName,
    containerClassName,
    padding = 8,
    width,
    header,
    footer,
    containerElement,
    havePopover,
  } = props;
  const [show, setShow] = useState(false);
  const container = containerElement ?? (isBrowser() ? document?.body : null);

  function updateBodyClasses() {
    if (!container) return;
    if (updateOpenDrawerCountTimeout) clearTimeout(updateOpenDrawerCountTimeout);

    updateOpenDrawerCountTimeout = setTimeout(() => {
      if (openDrawerCount > 0) {
        container.classList.add('dgsuikit:overflow-hidden', 'dgsuikit:relative');
      } else {
        container.classList.remove('dgsuikit:overflow-hidden', 'dgsuikit:relative');
      }
    }, ANIMATION_DURATION);
  }

  function openDrawer() {
    if (openDrawerCount === 0) updateBodyClasses();
    openDrawerCount++;
    setTimeout(() => {
      setShow(true);
    }, ANIMATION_DURATION);
  }

  function closeDrawer(runOnClose = true) {
    setShow(false);

    setTimeout(() => {
      openDrawerCount = Math.max(0, openDrawerCount - 1);
      updateBodyClasses();
      if (runOnClose) onClose();
    }, ANIMATION_DURATION);
  }

  useEffect(() => {
    if (open) openDrawer();
    else if (show) closeDrawer(false);
  }, [open]);

  useEffect(() => {
    return () => {
      closeDrawer(false);
    };
  }, []);

  if (!open || !container) return;

  const haveHeader = header
    ? Object.values(header).some((headerItem) => Boolean(headerItem))
    : false;

  const cardPosition: CSSProperties =
    position === 'center'
      ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
      : {
          top: position !== 'bottom' ? (padding ?? 0) : 'unset',
          bottom: position !== 'top' ? (padding ?? 0) : 'unset',
          left: position !== 'right' ? (padding ?? 0) : 'unset',
          right: position !== 'left' ? (padding ?? 0) : 'unset',
        };

  return createPortal(
    <div
      className={clsx(
        'dgsuikit:bg-black/40 dgsuikit:top-0 dgsuikit:left-0 dgsuikit:z-50 dgsuikit:opacity-0 dgsuikit:overflow-hidden dgsuikit:cursor-default dgsuikit:transition dgsuikit:ease-linear',
        { 'dgsuikit:opacity-100': show, 'dgsuikit:w-full dgsuikit:h-full': open },
        containerElement ? 'dgsuikit:absolute' : 'dgsuikit:fixed',
        maskClassName,
      )}
      onClick={() => (persist ? null : closeDrawer())}
    >
      <div
        className={clsx(
          'dgsuikit:absolute dgsuikit:z-10 dgsuikit:opacity-0 dgsuikit:transition dgsuikit:duration-100 dgsuikit:flex dgsuikit:justify-center',
          {
            'dgsuikit:opacity-100': show,
            'dgsuikit:translate-y-full': !show && position === 'bottom',
            'dgsuikit:-translate-y-full': !show && position === 'top',
            'dgsuikit:translate-x-full': !show && position === 'right',
            'dgsuikit:-translate-x-full': !show && position === 'left',
          },
          className,
        )}
        style={{
          ...cardPosition,
          maxHeight: `calc(100svh - ${padding * 2}px)`,
          maxWidth: `calc(100vw - ${padding * 2}px)`,
          width: getSize({ position, padding, item: 'width' }),
          height: getSize({ position, padding, item: 'height' }),
        }}
      >
        <div
          className={clsx(
            'dgsuikit:flex dgsuikit:flex-col dgsuikit:bg-white dgsuikit:divide-y dgsuikit:divide-gray-200 dgsuikit:divide-solid',
            !havePopover && 'dgsuikit:overflow-x-hidden',
            getRadius({ position, padding }),
          )}
          style={{ width: width ?? '100%' }}
          onClick={(e) => e.stopPropagation()}
        >
          {header && haveHeader && (
            <div
              className={clsx(
                'dgsuikit:h-16 dgsuikit:relative dgsuikit:shrink-0',
                header?.containerClassName,
              )}
            >
              {header.actionElement ? (
                <div className="dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:right-4 dgsuikit:[&>svg]:w-6 dgsuikit:[&_svg]:h-6 dgsuikit:text-gray-600">
                  {header.actionElement}
                </div>
              ) : null}
              {header.title ? (
                <div className="dgsuikit:flex dgsuikit:flex-col dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:right-1/2 dgsuikit:-translate-y-1/2 dgsuikit:translate-x-1/2 dgsuikit:text-center">
                  <span className="dgsuikit:font-h6-bold dgsuikit:text-gray-800">
                    {header.title}
                  </span>
                  {header.description ? (
                    <span className="dgsuikit:font-caption-regular dgsuikit:text-gray-500">
                      {header.description}
                    </span>
                  ) : null}
                </div>
              ) : null}
              {header.haveCloseIcon && (
                <button
                  onClick={() => closeDrawer()}
                  className="dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:left-4"
                >
                  <IconCloseRemove
                    width={24}
                    height={24}
                    className="dgsuikit:text-gray-600"
                  />
                </button>
              )}
            </div>
          )}
          <div
            className={clsx(
              'dgsuikit:p-4',
              !havePopover && 'dgsuikit:overflow-y-auto',
              containerClassName,
            )}
          >
            {children}
          </div>
          {footer?.element ? (
            <div className={clsx('dgsuikit:p-4 dgsuikit:mt-auto', footer.containerClassName)}>
              {footer.element}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    container,
  );
};

export default Drawer;
