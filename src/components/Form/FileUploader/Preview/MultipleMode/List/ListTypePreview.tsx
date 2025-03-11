import clsx from 'clsx';
import type { FC } from 'react';
import Button from '@/src/components/Button';
import FieldBottomInfo from '@/src/components/Form/Common/FieldBottomInfo/FieldBottomInfo';
import IconDelete from '@/src/icons/IconDelete';
import IconEye from '@/src/icons/IconEye';
import type { FileType } from '../../../types';
import FilePreview from '../../FilePreview';
import type { PreviewProps } from '../../types';
import { getPreviewBorder, renderPreviewDefaultAction } from '../../utils';

const ListTypePreview: FC<PreviewProps<FileType>> = (props) => {
  const {
    files: file,
    previewClassName,
    leftButton = true,
    rightButton = true,
    exteraButton,
  } = props;
  const { status, errorMessage, hintMessage, loading, title } = file;

  const fileName = title ?? file.file?.name;
  const haveFieldBottomInfo = Boolean(errorMessage ?? hintMessage);

  return (
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-w-0 dgs-ui-kit-min-w-full',
        getPreviewBorder(loading, errorMessage ? 'error' : status),
        (!status || status === 'default') &&
          !errorMessage &&
          'dgs-ui-kit-p-1 !dgs-ui-kit-border-gray-200',
        previewClassName,
      )}
    >
      <FilePreview
        file={file}
        className="!dgs-ui-kit-size-[72px] dgs-ui-kit-shrink-0"
      />
      {Boolean(fileName ?? haveFieldBottomInfo) && (
        <div className="dgs-ui-kit-space-y-1 dgs-ui-kit-overflow-hidden dgs-ui-kit-w-full">
          {Boolean(fileName) && (
            <span className="dgs-ui-kit-font-p2-medium dgs-ui-kit-text-gray-700 dgs-ui-kit-break-words dgs-ui-kit-line-clamp-1">
              {fileName}
            </span>
          )}
          {haveFieldBottomInfo && (
            <FieldBottomInfo
              hintMessage={hintMessage}
              errorMessage={errorMessage}
            />
          )}
        </div>
      )}
      {(leftButton || rightButton || exteraButton) && (
        <div className="dgs-ui-kit-flex dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse dgs-ui-kit-shrink-0">
          {exteraButton && (
            <Button
              {...exteraButton}
              onClick={(e) => {
                if (typeof exteraButton.onClick === 'function') exteraButton.onClick(file, e);
              }}
            >
              {exteraButton.children}
            </Button>
          )}
          {renderPreviewDefaultAction(rightButton, file, {
            color: 'gray',
            icon: <IconEye />,
            variant: 'text',
            className: '!dgs-ui-kit-opacity-100 !dgs-ui-kit-p-0',
          })}
          {renderPreviewDefaultAction(leftButton, file, {
            color: 'error',
            icon: <IconDelete />,
            variant: 'text',
            className: '!dgs-ui-kit-opacity-100 !dgs-ui-kit-p-0',
          })}
        </div>
      )}
    </div>
  );
};

export default ListTypePreview;
