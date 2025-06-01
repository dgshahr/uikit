import clsx from 'clsx';
import { useState, type DragEvent, type FC } from 'react';
import IconPlus4 from '@/src/icons/IconPlus4';
import FileInputIcon from './FileInputIcon';
import Button from '../../../Button';
import FieldBottomInfo from '../../Common/FieldBottomInfo/FieldBottomInfo';
import {
  DEFAULT_GRID_SIZE_CLASS,
  DEFAULT_SIZE_CLASS,
  DISABLED_CLASS,
  DRAG_CLASS,
  ERROR_CLASS,
  FOCUS_CLASS,
} from '../constants';
import type { FileInputProps, FilePreviewProps } from '../types';

function renderUploadButton(button: FileInputProps['button']) {
  const zIndexClass = 'dgsuikit:relative dgsuikit:z-10';
  if (typeof button === 'boolean') {
    return (
      <Button
        className={zIndexClass}
        rightIcon={<IconPlus4 />}
        size="small"
      />
    );
  } else {
    return (
      <Button
        {...button}
        className={clsx(zIndexClass, button?.className)}
      >
        {button?.children}
      </Button>
    );
  }
}

interface Props extends FileInputProps {
  previewtype?: FilePreviewProps['type'];
}

const FileInput: FC<Props> = (props) => {
  const {
    title,
    description,
    button = true,
    hideIcon,
    isError,
    className,
    onChange,
    helperProps,
    previewtype,
    ...rest
  } = props;
  const [isOnDrag, setIsOnDrag] = useState(false);
  const isGridPreview = previewtype === 'grid';

  function handleDrop(e: DragEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsOnDrag(false);
    onChange(e.dataTransfer.files?.[0], e.dataTransfer.files);
  }

  return (
    <div className="dgsuikit:space-y-2">
      <div
        className={clsx(
          'dgsuikit:relative dgsuikit:text-center dgsuikit:bg-white dgsuikit:transition-all',
          'dgsuikit:space-y-4 dgsuikit:p-4',
          'dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-center dgsuikit:items-center',
          'dgsuikit:border dgsuikit:border-gray-300 dgsuikit:border-dashed dgsuikit:rounded-lg',
          'dgsuikit:hover:ring-4 dgsuikit:hover:ring-gray-100',
          FOCUS_CLASS,
          DISABLED_CLASS,
          (isError || helperProps?.errorMessage) && ERROR_CLASS,
          isOnDrag && DRAG_CLASS,
          isGridPreview ? DEFAULT_GRID_SIZE_CLASS : DEFAULT_SIZE_CLASS,
          className,
        )}
      >
        {title ? (
          <p className="dgsuikit:font-p1-medium dgsuikit:text-primary-500 [font-feature-settings:inherit]">
            {title}
          </p>
        ) : null}
        {description ? (
          <pre className="dgsuikit:font-caption-demibold dgsuikit:text-primary-200 [font-feature-settings:inherit]">
            {description}
          </pre>
        ) : null}
        {button ? renderUploadButton(button) : null}
        {!hideIcon && <FileInputIcon />}
        <input
          className="dgsuikit:!mb-0 dgsuikit:absolute dgsuikit:inset-0 dgsuikit:size-full dgsuikit:opacity-0 dgsuikit:cursor-pointer dgsuikit:disabled:cursor-not-allowed dgsuikit:z-10"
          type="file"
          onDragEnter={() => setIsOnDrag(true)}
          onDragLeave={() => setIsOnDrag(false)}
          onDrop={handleDrop}
          onChange={(e) => onChange(e.currentTarget.files?.[0], e.currentTarget.files)}
          {...rest}
        />
      </div>

      {!isGridPreview && Object.keys(helperProps ?? {}).length > 0 && (
        <FieldBottomInfo {...helperProps} />
      )}
    </div>
  );
};

export default FileInput;
