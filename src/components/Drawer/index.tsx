'use client';

import clsx from 'clsx';
import { useEffect, useState, type CSSProperties, type FC, type ReactNode } from 'react';
import '@/src/styles.css';
import { createPortal } from 'react-dom';
import CloseRemoveIcon from '@/src/icons/CloseRemove';

const ANIMATION_DURATION = 150;

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
  const defaultRadius = 'dgs-ui-kit-rounded-2xl';
  if (padding > 0 || position === 'center') return defaultRadius;
  switch (position) {
    case 'bottom':
      return `${defaultRadius} dgs-ui-kit-rounded-b-none`;
    case 'left':
      return `${defaultRadius} dgs-ui-kit-rounded-l-none`;
    case 'right':
      return `${defaultRadius} dgs-ui-kit-rounded-r-none`;
    case 'top':
      return `${defaultRadius} dgs-ui-kit-rounded-t-none`;
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
  } = props;
  const [show, setShow] = useState(false);
  const container = containerElement ?? document?.body;

  function openDrawer() {
    container.classList.add('dgs-ui-kit-overflow-hidden', 'dgs-ui-kit-relative');
    setTimeout(() => {
      setShow(true);
    }, ANIMATION_DURATION);
  }

  function closeDrawer(runOnClose = true) {
    setShow(false);

    setTimeout(() => {
      container.classList.remove('dgs-ui-kit-overflow-hidden', 'dgs-ui-kit-relative');
      if (runOnClose) onClose();
    }, ANIMATION_DURATION);
  }

  useEffect(() => {
    if (open) openDrawer();
    else if (show) closeDrawer(false);
  }, [open]);

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
        'dgs-ui-kit-bg-black/40 dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-z-50 dgs-ui-kit-opacity-0 dgs-ui-kit-overflow-hidden dgs-ui-kit-cursor-default dgs-ui-kit-transition dgs-ui-kit-ease-linear',
        { 'dgs-ui-kit-opacity-100': show, 'dgs-ui-kit-w-full dgs-ui-kit-h-full': open },
        containerElement ? 'dgs-ui-kit-absolute' : 'dgs-ui-kit-fixed',
        maskClassName,
      )}
      onClick={() => (persist ? null : closeDrawer())}
    >
      <div
        className={clsx(
          'dgs-ui-kit-absolute dgs-ui-kit-z-10 dgs-ui-kit-opacity-0 dgs-ui-kit-transition dgs-ui-kit-duration-100 dgs-ui-kit-flex dgs-ui-kit-justify-center',
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
          ...cardPosition,
          maxHeight: `calc(100svh - ${padding * 2}px)`,
          maxWidth: `calc(100vw - ${padding * 2}px)`,
          width: getSize({ position, padding, item: 'width' }),
          height: getSize({ position, padding, item: 'height' }),
        }}
      >
        <div
          className={clsx(
            'dgs-ui-kit-overflow-x-hidden dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-bg-white dgs-ui-kit-divide-y dgs-ui-kit-divide-gray-200 dgs-ui-kit-divide-solid',
            getRadius({ position, padding }),
          )}
          style={{ width: width ?? '100%' }}
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
                  onClick={() => closeDrawer()}
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
          <div className={clsx('dgs-ui-kit-p-4 dgs-ui-kit-overflow-y-auto', containerClassName)}>
            {children}
          </div>
          {footer?.element ? (
            <div className={clsx('dgs-ui-kit-p-4 dgs-ui-kit-mt-auto', footer.containerClassName)}>
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
