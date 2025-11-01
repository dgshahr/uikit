import clsx from 'clsx';
import { useState, type DragEvent, type FC } from 'react';
import IconPlus4 from '@/src/icons/IconPlus4';
import IconPlusBold from '@/src/icons/IconPlusBold';
import FileInputIcon from './FileInputIcon';
import Button from '../../../Button';
import FieldBottomInfo from '../../Common/FieldBottomInfo/FieldBottomInfo';
import {
  DEFAULT_GRID_SIZE_CLASS,
  DEFAULT_SIZE_CLASS,
  DEFAULT_COMPACT_SIZE_CLASS,
  DISABLED_CLASS,
  DRAG_CLASS,
  ERROR_CLASS,
  FOCUS_CLASS,
  COMPACT_LAYOUT_CLASS,
  DEFAULT_LAYOUT_CLASS,
} from '../constants';
import type { FileInputProps, MultipleFilePreviewProps, SingleFilePreviewProps } from '../types';

function renderUploadButton(button: FileInputProps['button'], isCompact?: boolean) {
  const zIndexClass = 'dgsuikit:relative dgsuikit:z-10';

  if (typeof button === 'boolean') {
    if (isCompact) {
      return (
        <Button
          size="small"
          variant="secondary"
          rightIcon={<IconPlusBold />}
          className={clsx(
            zIndexClass,
            'dgsuikit:!w-7 dgsuikit:!h-7 dgsuikit:mb-0 dgsuikit:text-primary-500 dgsuikit:bg-primary-50',
            'dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center dgsuikit:rounded-md dgsuikit:!p-0',
          )}
        />
      );
    }
    return (
      <Button
        className={zIndexClass}
        rightIcon={<IconPlus4 />}
        size="small"
      />
    );
  }

  return (
    <Button
      {...button}
      className={clsx(zIndexClass, button?.className)}
    >
      {button?.children}
    </Button>
  );
}

interface Props extends FileInputProps {
  previewType?: SingleFilePreviewProps['type'] | MultipleFilePreviewProps['type'];
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
    disabled,
    previewType = 'default',
    ...rest
  } = props;

  const [isOnDrag, setIsOnDrag] = useState(false);
  const isGridPreview = previewType === 'grid';
  const isCompact = previewType === 'compact';

  function handleDrop(e: DragEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsOnDrag(false);
    onChange(e.dataTransfer.files?.[0], e.dataTransfer.files);
  }

  const layoutClass = isCompact ? COMPACT_LAYOUT_CLASS : DEFAULT_LAYOUT_CLASS;

  let sizeClass = DEFAULT_SIZE_CLASS;
  if (isGridPreview) sizeClass = DEFAULT_GRID_SIZE_CLASS;
  else if (isCompact) sizeClass = DEFAULT_COMPACT_SIZE_CLASS;

  const baseClasses = clsx(
    'dgsuikit:relative dgsuikit:text-center dgsuikit:bg-white dgsuikit:transition-all',
    'dgsuikit:border dgsuikit:border-gray-300 dgsuikit:border-dashed dgsuikit:rounded-xl',
    'dgsuikit:hover:ring-4 dgsuikit:hover:ring-gray-100',
    FOCUS_CLASS,
    DISABLED_CLASS,
    (isError || helperProps?.errorMessage) && ERROR_CLASS,
    isOnDrag && DRAG_CLASS,
    layoutClass,
    sizeClass,
    className,
  );

  return (
    <div className="dgsuikit:space-y-2">
      <div className={baseClasses}>
        {title && (
          <p
            className={clsx(
              isCompact
                ? 'dgsuikit:font-caption-demibold dgsuikit:line-clamp-1 dgsuikit:text-primary-500 [font-feature-settings:inherit]'
                : 'dgsuikit:font-p1-medium dgsuikit:text-primary-500 [font-feature-settings:inherit]',
            )}
          >
            {title}
          </p>
        )}

        {!isCompact && description && (
          <pre className="dgsuikit:font-caption-demibold dgsuikit:text-primary-200 [font-feature-settings:inherit]">
            {description}
          </pre>
        )}

        {button ? renderUploadButton(button, isCompact) : null}
        {!hideIcon && <FileInputIcon />}

        <input
          className="dgsuikit:!mb-0 dgsuikit:absolute dgsuikit:inset-0 dgsuikit:size-full dgsuikit:opacity-0 dgsuikit:cursor-pointer dgsuikit:disabled:cursor-not-allowed dgsuikit:z-10"
          type="file"
          onDragEnter={() => setIsOnDrag(true)}
          onDragLeave={() => setIsOnDrag(false)}
          onDrop={handleDrop}
          onChange={(e) => onChange(e.currentTarget.files?.[0], e.currentTarget.files)}
          disabled={disabled}
          {...rest}
        />
      </div>

      {!isGridPreview && Object.keys(helperProps ?? {}).length > 0 && (
        <FieldBottomInfo
          {...helperProps}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default FileInput;
