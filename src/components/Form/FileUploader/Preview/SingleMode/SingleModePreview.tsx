import clsx from 'clsx';
import type { FC } from 'react';
import Button from '@/src/components/Button';
import IconDelete from '@/src/icons/IconDelete';
import IconDelete1 from '@/src/icons/IconDelete1';
import IconEye from '@/src/icons/IconEye';
import IconMinimize from '@/src/icons/IconMinimize';
import PreviewTitle from './PreviewTitle';
import FieldBottomInfo from '../../../Common/FieldBottomInfo/FieldBottomInfo';
import { DEFAULT_COMPACT_SIZE_CLASS } from '../../constants';
import type { ActionConfig, FileType } from '../../types';
import FilePreview from '../FilePreview';
import type { PreviewProps } from '../types';
import { getPreviewBorder, renderPreviewDefaultAction } from '../utils';

const SingleModePreview: FC<PreviewProps<FileType>> = (props) => {
  const {
    files,
    leftButton = true,
    rightButton = true,
    exteraButton,
    wrapperClassName,
    previewClassName,
    type = 'default',
  } = props;
  const { errorMessage, file, hintMessage, loading, status, title } = files;

  const isCompact = type === 'compact';

  const leftButtonConfig: ActionConfig = isCompact
    ? {
        icon: <IconDelete />,
        className:
          'dgsuikit:!absolute dgsuikit:left-2 dgsuikit:top-2 dgsuikit:!p-1.5 dgsuikit:bg-red-500/60 dgsuikit:hover:bg-red-400/50 dgsuikit:backdrop-blur-[1px]',
      }
    : {
        color: 'error',
        icon: <IconDelete1 />,
        className: 'dgsuikit:!absolute dgsuikit:left-2 dgsuikit:top-2',
      };

  const rightButtonConfig: ActionConfig = isCompact
    ? {
        icon: <IconEye className="dgsuikit:text-white" />,
        variant: 'text',
        className:
          'dgsuikit:!absolute dgsuikit:right-2 dgsuikit:top-2 dgsuikit:!p-1.5 dgsuikit:bg-gray-800/60 dgsuikit:hover:bg-gray-700/50 dgsuikit:backdrop-blur-[1px]',
      }
    : {
        color: 'gray',
        icon: <IconMinimize />,
        className: 'dgsuikit:!absolute dgsuikit:right-2 dgsuikit:bottom-2',
      };

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
          className={clsx(isCompact && DEFAULT_COMPACT_SIZE_CLASS, previewClassName)}
          isCompact={isCompact}
        >
          {renderPreviewDefaultAction(leftButton, files, leftButtonConfig)}
          {renderPreviewDefaultAction(rightButton, files, rightButtonConfig)}

          {!isCompact && exteraButton ? (
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

          {isCompact && (
            <PreviewTitle
              type="compact"
              title={title}
              fileName={file?.name}
              loading={loading}
              errorMessage={errorMessage}
              status={status}
            />
          )}
        </FilePreview>
        {!isCompact && (
          <PreviewTitle
            type="default"
            title={title}
            fileName={file?.name}
            loading={loading}
            errorMessage={errorMessage}
            status={status}
          />
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
