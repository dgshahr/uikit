import type { FC } from 'react';
import GridTypePreview from './Grid/GridTypePreview';
import type { FileType } from '../../types';
import type { PreviewProps } from '../types';

function getFileKey(file: FileType) {
  return file.file ? URL.createObjectURL(file.file) : (file.src ?? '');
}

const MultipleModePreveiw: FC<PreviewProps<FileType[]>> = (props) => {
  const { files, type } = props;

  if (type === 'grid')
    return files.map((file) => (
      <GridTypePreview
        key={getFileKey(file)}
        {...props}
        files={file}
      />
    ));

  return <div>MultipleModePreveiw</div>;
};

export default MultipleModePreveiw;
