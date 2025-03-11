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
    <div className="dgs-ui-kit-space-y-2">
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
            className: '!dgs-ui-kit-absolute dgs-ui-kit-left-2 dgs-ui-kit-top-2',
          })}
          {renderPreviewDefaultAction(rightButton, files, {
            color: 'gray',
            icon: <IconMinimize />,
            className: '!dgs-ui-kit-absolute dgs-ui-kit-right-2 dgs-ui-kit-bottom-2',
          })}
          {exteraButton ? (
            <Button
              className={clsx(
                exteraButton.className,
                '!dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-y-1/2 -dgs-ui-kit-translate-x-1/2',
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
              'dgs-ui-kit-px-3 dgs-ui-kit-py-1.5 dgs-ui-kit-rounded-lg dgs-ui-kit-font-p2-medium dgs-ui-kit-text-center dgs-ui-kit-line-clamp-1 dgs-ui-kit-mt-1 dgs-ui-kit-w-0 dgs-ui-kit-min-w-full',
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
