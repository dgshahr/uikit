import clsx from 'clsx';
import type { FC } from 'react';
import IconDelete1 from '@/src/icons/IconDelete1';
import IconMinimize from '@/src/icons/IconMinimize';
import { TITLE_CLASS } from './constants';
import FilePreview from './FilePreview';
import type { FilePreviewProps, FileType } from './types';
import { renderPreviewDefaultAction } from './utils';
import Button from '../../Button';
import FieldBottomInfo from '../Common/FieldBottomInfo/FieldBottomInfo';

interface SingleModePreviewProps extends FilePreviewProps {
  files: FileType;
}

export function getTitleClass(
  loading: FileType['loading'],
  errorMessage: FileType['errorMessage'],
  status: FileType['status'] = 'default',
) {
  if (loading) return TITLE_CLASS.loading;

  if (errorMessage) return TITLE_CLASS.error;

  return TITLE_CLASS[status];
}

const SingleModePreview: FC<SingleModePreviewProps> = (props) => {
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
    <div className="dgs-ui-kit-space-y-2">
      <div
        className={clsx(
          'dgs-ui-kit-p-1 dgs-ui-kit-border dgs-ui-kit-border-transparent dgs-ui-kit-rounded-lg',
          {
            '!dgs-ui-kit-border-error-500': !loading && (status === 'error' || errorMessage),
            '!dgs-ui-kit-border-warning-700': !loading && status === 'warning',
          },
          wrapperClassName,
        )}
      >
        <FilePreview
          file={files}
          className={previewClassName}
        >
          {renderPreviewDefaultAction(leftButton, {
            color: 'error',
            icon: <IconDelete1 />,
            className: 'dgs-ui-kit-left-2 dgs-ui-kit-top-2',
          })}
          {renderPreviewDefaultAction(rightButton, {
            color: 'gray',
            icon: <IconMinimize />,
            className: 'dgs-ui-kit-right-2 dgs-ui-kit-bottom-2',
          })}
          {exteraButton ? (
            <Button
              className={clsx(
                exteraButton.className,
                '!dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-y-1/2 -dgs-ui-kit-translate-x-1/2',
              )}
              {...exteraButton}
            >
              {exteraButton.children}
            </Button>
          ) : null}
        </FilePreview>
        {Boolean(title ?? file?.name) && (
          <div
            className={clsx(
              getTitleClass(loading, errorMessage, status),
              'dgs-ui-kit-px-3 dgs-ui-kit-py-1.5 dgs-ui-kit-rounded-lg dgs-ui-kit-font-p2-medium dgs-ui-kit-text-center dgs-ui-kit-line-clamp-1 dgs-ui-kit-mt-1',
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
