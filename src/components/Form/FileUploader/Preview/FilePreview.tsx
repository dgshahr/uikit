import clsx from 'clsx';
import type { FC, ReactNode, SyntheticEvent } from 'react';
import fallbackImage from './preveiwFallback.svg';
import ProgressDoughnut from '../../../Progress/Doughnut';
import { ABSOLUTE_CENTER, DEFAULT_SIZE_CLASS } from '../constants';
import type { FileType } from '../types';

interface FilePreviewProps {
  children?: ReactNode;
  file: FileType;
  className?: string;
}

const FilePreview: FC<FilePreviewProps> = (props) => {
  const { file, children, className } = props;
  const fileSrc = file.file ? URL.createObjectURL(file.file) : (file.src ?? '');

  function handleImageError(e: SyntheticEvent<HTMLImageElement, Event>) {
    const target = e.currentTarget;
    target.src = fallbackImage;
    target.classList.add('dgsuikit:bg-gray-100');
  }

  return (
    <div
      className={clsx(
        'dgsuikit:relative dgsuikit:rounded-lg dgsuikit:overflow-hidden',
        DEFAULT_SIZE_CLASS,
        className,
      )}
    >
      <img
        className="dgsuikit:w-full dgsuikit:h-full"
        src={fileSrc}
        alt="image-preview"
        onError={handleImageError}
      />
      <div
        className={clsx(
          'dgsuikit:bg-black dgsuikit:transition-colors dgsuikit:absolute dgsuikit:w-full dgsuikit:h-full dgsuikit:top-0 dgsuikit:left-0',
          file.loading ? 'dgsuikit:bg-opacity-70' : 'dgsuikit:bg-opacity-50',
        )}
      >
        {typeof file.loading === 'boolean' && file.loading && (
          <div className={clsx('dot-flashing', ABSOLUTE_CENTER)} />
        )}
        {typeof file.loading === 'number' && (
          <div
            className={clsx(
              'dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:justify-center',
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
            <div className="dgsuikit:font-oveline-regular dgsuikit:text-gray-50 ss02 dgsuikit:mt-1">
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
