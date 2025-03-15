'use client';
import clsx from 'clsx';
import { Fragment, type FC } from 'react';
import FileInput from './Input/FileInput';
import MultipleModePreveiw from './Preview/MultipleMode/MultipleModePreveiw';
import SingleModePreview from './Preview/SingleMode/SingleModePreview';
import type { FilePreviewProps, FileType, FileUploaderProps } from './types';

const FileUploader: FC<FileUploaderProps> = (props) => {
  const { mode, fileInputProps, isError, disabled, onChange, files, previewProps, className } =
    props;
  const haveFiles = Array.isArray(files) ? files.length > 0 : Boolean(files);

  const wrapperClassName = clsx(
    Boolean(mode === 'multiple' && previewProps?.type === 'grid') &&
      'dgs-ui-kit-flex dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse',
    className,
  );
  const WrapperElement = wrapperClassName ? 'div' : Fragment;

  return (
    <WrapperElement {...(WrapperElement === 'div' ? { className } : {})}>
      {((!haveFiles && mode === 'single') || mode !== 'single') && (
        <FileInput
          {...fileInputProps}
          previewtype={(previewProps as FilePreviewProps)?.type}
          disabled={disabled}
          isError={isError}
          onChange={onChange}
        />
      )}
      {haveFiles && (
        <>
          {mode === 'single' ? (
            <SingleModePreview
              {...previewProps}
              files={files as FileType}
            />
          ) : (
            <MultipleModePreveiw
              {...previewProps}
              files={files as FileType[]}
            />
          )}
        </>
      )}
    </WrapperElement>
  );
};

export default FileUploader;
