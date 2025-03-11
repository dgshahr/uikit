'use client';
import type { FC } from 'react';
import FileInput from './FileInput';
import SingleModePreview from './SingleModePreview';
import type { FileType, FileUploaderProps } from './types';

import '@/src/styles.css';

const FileUploader: FC<FileUploaderProps> = (props) => {
  const { mode, fileInputProps, isError, disabled, onChange, files, previewProps, className } =
    props;
  const haveFiles = Array.isArray(files) ? files.length > 0 : Boolean(files);

  return (
    <div className={className}>
      {!haveFiles && (
        <FileInput
          {...fileInputProps}
          disabled={disabled}
          isError={isError}
          onChange={onChange}
        />
      )}
      {haveFiles && mode === 'single' && (
        <SingleModePreview
          {...previewProps}
          files={files as FileType}
        />
      )}
    </div>
  );
};

export default FileUploader;
