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
        'dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-2 dgsuikit:w-0 dgsuikit:min-w-full',
        getPreviewBorder(loading, errorMessage ? 'error' : status),
        (!status || status === 'default') &&
          !errorMessage &&
          'dgsuikit:p-1 dgsuikit:!border-gray-200',
        previewClassName,
      )}
    >
      <FilePreview
        file={file}
        className="dgsuikit:!size-[72px] dgsuikit:shrink-0"
      />
      {Boolean(fileName ?? haveFieldBottomInfo) && (
        <div className="dgsuikit:space-y-1 dgsuikit:overflow-hidden dgsuikit:w-full">
          {Boolean(fileName) && (
            <span className="dgsuikit:font-p2-medium dgsuikit:text-gray-700 dgsuikit:break-words dgsuikit:line-clamp-1">
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
        <div className="dgsuikit:flex dgsuikit:space-x-1 dgsuikit:shrink-0">
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
            className: 'dgsuikit:!opacity-100',
          })}
          {renderPreviewDefaultAction(leftButton, file, {
            color: 'error',
            icon: <IconDelete />,
            variant: 'text',
            className: 'dgsuikit:!opacity-100',
          })}
        </div>
      )}
    </div>
  );
};

export default ListTypePreview;
