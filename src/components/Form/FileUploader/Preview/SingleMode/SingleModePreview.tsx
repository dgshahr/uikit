import clsx from 'clsx';
import type { FC } from 'react';
import Button from '@/src/components/Button';
import IconDelete1 from '@/src/icons/IconDelete1';
import IconMinimize from '@/src/icons/IconMinimize';
import FieldBottomInfo from '../../../Common/FieldBottomInfo/FieldBottomInfo';
import { TITLE_CLASS } from '../../constants';
import type { FileType } from '../../types';
import FilePreview from '../FilePreview';
import type { PreviewProps } from '../types';
import { getPreviewBorder, renderPreviewDefaultAction } from '../utils';

export function getTitleClass(
  loading: FileType['loading'],
  errorMessage: FileType['errorMessage'],
  status: FileType['status'] = 'default',
) {
  if (loading) return TITLE_CLASS.loading;

  if (errorMessage) return TITLE_CLASS.error;

  return TITLE_CLASS[status];
}

const SingleModePreview: FC<PreviewProps<FileType>> = (props) => {
  const {
    files,
    leftButton = true,
    rightButton = true,
    exteraButton,
    wrapperClassName,
    previewClassName,
  } = props;
  const { errorMessage, file, hintMessage, loading, status, title } = files;

  return (
    <div className="dgsuikit:space-y-2">
      <div
        className={clsx(
          getPreviewBorder(loading, errorMessage ? 'error' : status),
          wrapperClassName,
        )}
      >
        <FilePreview
          file={files}
          className={previewClassName}
        >
          {renderPreviewDefaultAction(leftButton, files, {
            color: 'error',
            icon: <IconDelete1 />,
            className: 'dgsuikit:!absolute dgsuikit:left-2 dgsuikit:top-2',
          })}
          {renderPreviewDefaultAction(rightButton, files, {
            color: 'gray',
            icon: <IconMinimize />,
            className: 'dgsuikit:!absolute dgsuikit:right-2 dgsuikit:bottom-2',
          })}
          {exteraButton ? (
            <Button
              className={clsx(
                exteraButton.className,
                'dgsuikit:!absolute dgsuikit:top-1/2 dgsuikit:left-1/2 dgsuikit:-translate-y-1/2 dgsuikit:-translate-x-1/2',
              )}
              {...exteraButton}
              onClick={(e) => {
                if (typeof exteraButton.onClick === 'function') exteraButton.onClick(files, e);
              }}
            >
              {exteraButton.children}
            </Button>
          ) : null}
        </FilePreview>
        {Boolean(title ?? file?.name) && (
          <div
            className={clsx(
              getTitleClass(loading, errorMessage, status),
              'dgsuikit:px-3 dgsuikit:py-1.5 dgsuikit:rounded-lg dgsuikit:font-p2-medium dgsuikit:text-center dgsuikit:line-clamp-1 dgsuikit:mt-1 dgsuikit:w-0 dgsuikit:min-w-full',
            )}
          >
            {title ?? file?.name}
          </div>
        )}
      </div>
      {(hintMessage ?? errorMessage) ? (
        <FieldBottomInfo
          errorMessage={errorMessage}
          hintMessage={hintMessage}
        />
      ) : null}
    </div>
  );
};

export default SingleModePreview;
