import clsx from 'clsx';
import type { FC } from 'react';
import IconDelete1 from '@/src/icons/IconDelete1';
import IconMinimize from '@/src/icons/IconMinimize';
import { DEFAULT_GRID_SIZE_CLASS } from '../../../constants';
import type { FileType } from '../../../types';
import FilePreview from '../../FilePreview';
import type { PreviewProps } from '../../types';
import { getPreviewBorder, renderPreviewDefaultAction } from '../../utils';

const GridTypePreview: FC<PreviewProps<FileType>> = (props) => {
  const {
    files: file,
    previewClassName,
    leftButton = true,
    rightButton = true,
    wrapperClassName,
  } = props;
  return (
    <div
      className={clsx(
        getPreviewBorder(file.loading, file.errorMessage ? 'error' : file.status),
        DEFAULT_GRID_SIZE_CLASS,
        wrapperClassName,
      )}
    >
      <FilePreview
        file={file}
        className={clsx('!dgs-ui-kit-size-full', previewClassName)}
      >
        {renderPreviewDefaultAction(leftButton, file, {
          color: 'error',
          icon: <IconDelete1 />,
          className: 'dgs-ui-kit-left-2 dgs-ui-kit-top-2',
        })}
        {renderPreviewDefaultAction(rightButton, file, {
          color: 'gray',
          icon: <IconMinimize />,
          className: 'dgs-ui-kit-right-2 dgs-ui-kit-bottom-2',
        })}
      </FilePreview>
    </div>
  );
};

export default GridTypePreview;
