import clsx from 'clsx';
import type { FC } from 'react';
import GridTypePreview from './Grid/GridTypePreview';
import ListTypePreview from './List/ListTypePreview';
import type { FileType } from '../../types';
import type { PreviewProps } from '../types';

function getFileKey(file: FileType) {
  return file.file ? URL.createObjectURL(file.file) : (file.src ?? '');
}

const MultipleModePreview: FC<PreviewProps<FileType[]>> = (props) => {
  const { files, type = 'list', wrapperClassName } = props;

  if (type === 'grid')
    return files.map((file) => (
      <GridTypePreview
        key={getFileKey(file)}
        {...props}
        files={file}
      />
    ));

  return (
    <div className={clsx('dgsuikit:mt-4 dgsuikit:space-y-2', wrapperClassName)}>
      {files.map((file) => (
        <ListTypePreview
          key={getFileKey(file)}
          {...props}
          files={file}
        />
      ))}
    </div>
  );
};

export default MultipleModePreview;
