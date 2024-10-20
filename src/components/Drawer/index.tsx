'use client';

import clsx from 'clsx';
import { useEffect, useState, type FC, type PropsWithChildren, type ReactNode } from 'react';
import '@/src/styles.css';
import CloseRemoveIcon from '@/src/icons/CloseRemove';

const ANIMATION_DURATION = 150;

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  persist?: boolean;
  position?: 'bottom' | 'top' | 'right' | 'left';
  className?: string;
  maskClassName?: string;
  containerClassName?: string;
  padding?: number;
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
  if (item === 'width') {
    if (position === 'bottom' || position === 'top') return `calc(100% - ${padding * 2}px)`;
    else return `auto`;
  } else {
    if (position === 'bottom' || position === 'top') return 'auto';
    else return `calc(100% - ${padding * 2}px)`;
  }
}

const Drawer: FC<PropsWithChildren<DrawerProps>> = (props) => {
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
    header,
    footer,
  } = props;
  const [show, setShow] = useState(false);

  function openDrawer() {
    document.body.classList.add('dgs-ui-kit-overflow-hidden');
    setTimeout(() => {
      setShow(true);
    }, ANIMATION_DURATION);
  }

  function closeDrawer() {
    if (persist) return;

    setShow(false);

    setTimeout(() => {
      document.body.classList.remove('dgs-ui-kit-overflow-hidden');
      onClose();
    }, ANIMATION_DURATION);
  }

  useEffect(() => {
    if (open) openDrawer();
  }, [open]);

  const haveHeader = header
    ? Object.values(header).some((headerItem) => Boolean(headerItem))
    : false;

  return (
    <button
      className={clsx(
        'dgs-ui-kit-bg-black/40 dgs-ui-kit-fixed dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-z-50 dgs-ui-kit-opacity-0 dgs-ui-kit-overflow-hidden dgs-ui-kit-cursor-default dgs-ui-kit-transition dgs-ui-kit-ease-linear',
        { 'dgs-ui-kit-opacity-100': show, 'dgs-ui-kit-w-screen dgs-ui-kit-h-screen': open },
        maskClassName,
      )}
      onClick={closeDrawer}
    >
      <div
        className={clsx(
          'dgs-ui-kit-overflow-x-hidden dgs-ui-kit-rounded-2xl dgs-ui-kit-absolute dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-z-10 dgs-ui-kit-bg-white dgs-ui-kit-opacity-0 dgs-ui-kit-transition dgs-ui-kit-duration-100 dgs-ui-kit-divide-y dgs-ui-kit-divide-gray-200 dgs-ui-kit-divide-solid',
          {
            'dgs-ui-kit-opacity-100': show,
            'dgs-ui-kit-translate-y-full': !show && position === 'bottom',
            '-dgs-ui-kit-translate-y-full': !show && position === 'top',
            'dgs-ui-kit-translate-x-full': !show && position === 'right',
            '-dgs-ui-kit-translate-x-full': !show && position === 'left',
          },
          className,
        )}
        style={{
          top: position !== 'bottom' ? (padding ?? 0) : 'unset',
          bottom: position !== 'top' ? (padding ?? 0) : 'unset',
          left: position !== 'right' ? (padding ?? 0) : 'unset',
          right: position !== 'left' ? (padding ?? 0) : 'unset',
          maxHeight: `calc(100vh - ${padding * 2}px)`,
          maxWidth: `calc(100vw - ${padding * 2}px)`,
          width: getSize({ position, padding, item: 'width' }),
          height: getSize({ position, padding, item: 'height' }),
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {header && haveHeader && (
          <div
            className={clsx(
              'dgs-ui-kit-h-16 dgs-ui-kit-relative dgs-ui-kit-shrink-0',
              header?.containerClassName,
            )}
          >
            {header.actionElement ? (
              <div className="dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-right-4 [&>svg]:dgs-ui-kit-w-6 [&_svg]:dgs-ui-kit-h-6 dgs-ui-kit-text-gray-600">
                {header.actionElement}
              </div>
            ) : null}
            {header.title ? (
              <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-right-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-translate-x-1/2 dgs-ui-kit-text-center">
                <span className="dgs-ui-kit-font-h6-bold dgs-ui-kit-text-gray-800">
                  {header.title}
                </span>
                {header.description ? (
                  <span className="dgs-ui-kit-font-caption-regular dgs-ui-kit-text-gray-500">
                    {header.description}
                  </span>
                ) : null}
              </div>
            ) : null}
            {header.haveCloseIcon && (
              <button
                onClick={closeDrawer}
                className="dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-left-4"
              >
                <CloseRemoveIcon
                  width={24}
                  height={24}
                  className="dgs-ui-kit-text-gray-600"
                />
              </button>
            )}
          </div>
        )}
        <div className={clsx('dgs-ui-kit-p-4', containerClassName)}>{children}</div>
        {footer?.element ? (
          <div className={clsx('dgs-ui-kit-p-4 dgs-ui-kit-mt-auto', footer.containerClassName)}>
            {footer.element}
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default Drawer;
