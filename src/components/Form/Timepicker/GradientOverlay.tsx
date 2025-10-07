import clsx from 'clsx';
import type { FC } from 'react';

type GradientOverlayProps = { position: 'top' | 'bottom' };

const GradientOverlay: FC<GradientOverlayProps> = ({ position }) => {
  return (
    <div
      className={clsx(
        'dgsuikit:absolute dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-12 dgsuikit:pointer-events-none',
        'dgsuikit:from-[rgba(255,255,255,0.54)] dgsuikit:to-[rgba(255,255,255,0.90)]',
        position === 'top'
          ? 'dgsuikit:bg-gradient-to-t dgsuikit:top-0'
          : 'dgsuikit:bg-gradient-to-b dgsuikit:bottom-0',
      )}
    />
  );
};

export default GradientOverlay;
