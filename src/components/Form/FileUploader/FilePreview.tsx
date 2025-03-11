import clsx from 'clsx';
import type { FC, ReactNode, SyntheticEvent } from 'react';
import { ABSOLUTE_CENTER, DEFAULT_SIZE_CLASS } from './constants';
import fallbackImage from './preveiwFallback.svg';
import type { FileType } from './types';
import ProgressDoughnut from '../../Progress/Doughnut';

interface FilePreviewProps {
  children: ReactNode;
  file: FileType;
  className?: string;
}

const FilePreview: FC<FilePreviewProps> = (props) => {
  const { file, children, className } = props;
  const fileSrc = file.file ? URL.createObjectURL(file.file) : (file.src ?? '');

  function handleImageError(e: SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.currentTarget;
    target.src = fallbackImage;
    target.classList.add('dgs-ui-kit-bg-gray-100');
  }

  return (
    <div
      className={clsx(
        'dgs-ui-kit-relative dgs-ui-kit-rounded-lg dgs-ui-kit-overflow-hidden',
        DEFAULT_SIZE_CLASS,
        className,
      )}
    >
      <img
        className="dgs-ui-kit-w-full dgs-ui-kit-h-full"
        src={fileSrc}
        alt="image-preview"
        onError={handleImageError}
      />
      <div
        className={clsx(
          'dgs-ui-kit-bg-black dgs-ui-kit-transition-colors dgs-ui-kit-absolute dgs-ui-kit-w-full dgs-ui-kit-h-full dgs-ui-kit-top-0 dgs-ui-kit-left-0',
          file.loading ? 'dgs-ui-kit-bg-opacity-70' : 'dgs-ui-kit-bg-opacity-50',
        )}
      >
        {typeof file.loading === 'boolean' && file.loading && (
          <div className={clsx('dot-flashing', ABSOLUTE_CENTER)} />
        )}
        {typeof file.loading === 'number' && (
          <div
            className={clsx(
              'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-items-center dgs-ui-kit-justify-center',
              ABSOLUTE_CENTER,
            )}
          >
            <ProgressDoughnut
              current={file.loading}
              total={100}
              color="gray"
              size={30}
              strokeSize={4}
            />
            <div className="dgs-ui-kit-font-oveline-regular dgs-ui-kit-text-gray-50 ss02 dgs-ui-kit-mt-1">
              {file.loading} %
            </div>
          </div>
        )}
        {!file.loading && children}
      </div>
    </div>
  );
};

export default FilePreview;
