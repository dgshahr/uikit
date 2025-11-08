'use client';
import clsx from 'clsx';
import { useMemo, useState, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useFlipPosition } from '@/src/hooks/useFlipPosition';
import { isBrowser } from '@/src/utils/isBrowser';
import TooltipContent from './Content';

import '@/src/styles.css';
import type { PopperPosition } from '../Form/Wrappers/PickerWrapper/type';

export interface TooltipProps {
  position?: PopperPosition;
  title?: string;
  icon?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  className?: string;
  wrapperClassName?: string;
  children: ReactNode;
  disabled?: boolean;
  attachToBody?: boolean;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    content,
    className,
    wrapperClassName,
    footer,
    icon,
    position = 'top-center',
    title,
    disabled,
    attachToBody,
  } = props;
  const [open, setOpen] = useState(false);
  const [innerPosition, setInnerPosition] = useState(position);
  const { anchorRef, popperRef } = useFlipPosition<HTMLDivElement, HTMLDivElement>({
    initialPosition: position,
    onPositionChange(newPosition) {
      setInnerPosition((prev) => (prev === newPosition ? prev : newPosition));
    },
  });

  function showTooltip() {
    if (disabled) return;
    setOpen(true);
  }

  function closeTooltip() {
    setOpen(false);
  }

  const contentComponent = (
    <TooltipContent
      ref={popperRef}
      open={open}
      title={title}
      icon={icon}
      footer={footer}
      className={className}
      position={innerPosition}
      content={content}
    />
  );

  const anchorPositionStyles = useMemo(() => {
    if (!anchorRef.current || !attachToBody || !isBrowser()) return {};
    const { top, left, width, height } = anchorRef.current.getBoundingClientRect();

    return {
      top: `${top + window?.scrollY}px`,
      left: `${left + window?.scrollX}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
  }, [open, attachToBody]);

  return (
    <div
      ref={anchorRef}
      className={clsx('dgsuikit:relative', wrapperClassName)}
      onMouseEnter={showTooltip}
      onTouchStart={showTooltip}
      onMouseLeave={closeTooltip}
      onTouchEnd={closeTooltip}
    >
      {children}
      {attachToBody && isBrowser()
        ? createPortal(
            <div
              className="dgsuikit:absolute"
              style={{
                ...anchorPositionStyles,
              }}
            >
              {contentComponent}
            </div>,
            document?.body,
          )
        : contentComponent}
    </div>
  );
};

export default Tooltip;
