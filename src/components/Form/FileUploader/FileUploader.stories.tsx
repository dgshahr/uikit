import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useEffect, useRef, useState } from 'react';
import { FileType } from './types';
import FileUploader from './index';

const meta = {
  title: 'Components/Form/FileUploader',
  component: FileUploader,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport FileUploader from '@dgshahr/ui-kit/Form/FileUploader';\nOr\nimport { FileUploader } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof FileUploader>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Story['args'] = {
  onChange: () => {},
  fileInputProps: {
    title: 'عنوان',
    className: 'ss02',
    helperProps: {
      hintMessage: 'پیام راهنما',
    },
  },
};

const SingleFileInputExample: FC<Story['args']> = (props) => {
  const [file, setFile] = useState<FileType>();
  const intervalId = useRef<NodeJS.Timeout>();

  function handleFileSelect(newFile: File | undefined) {
    intervalId.current = undefined;
    if (!newFile) {
      setFile(undefined);
      return;
    }

    setFile({ file: newFile, loading: 40 });
  }

  useEffect(() => {
    if (file && typeof file.loading === 'number' && !intervalId.current) {
      intervalId.current = setInterval(() => {
        setFile((state) => state && { ...state, loading: (state.loading as number) + 20 });
      }, 1000);
    }

    return () => {
      if (intervalId.current && (file?.loading === 80 || !file)) {
        clearInterval(intervalId.current);
        setFile((state) => state && { ...state, loading: false });
      }
    };
  }, [file]);

  return (
    <FileUploader
      {...props}
      mode="single"
      files={file}
      onChange={handleFileSelect}
      previewProps={{
        ...props.previewProps,
        leftButton: {
          onClick: () => handleFileSelect(undefined),
        },
      }}
    />
  );
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    fileInputProps: {
      ...defaultArgs.fileInputProps,
      description: `فرمت‌های قابل قبول JPG , PNG
حداکثر حجم تا 5Mb`,
    },
    previewProps: {
      ...defaultArgs.previewProps,
      exteraButton: {
        variant: 'secondary',
        children: 'عنوان',
        size: 'small',
      },
    },
  },
  render: (args) => <SingleFileInputExample {...args} />,
};

const MultipleFileInputExample: FC<Story['args']> = (props) => {
  const [files, setFiles] = useState<FileType[]>([]);

  function handleFileSelect(newFile: File | undefined) {
    if (!newFile) return;

    setFiles((state) => [...state, { file: newFile }]);
  }

  function handleRemoveFile(removedFile: FileType) {
    setFiles((state) => state.filter((file) => file !== removedFile));
  }

  return (
    <FileUploader
      {...props}
      mode="multiple"
      files={files}
      onChange={handleFileSelect}
      previewProps={{
        ...props.previewProps,
        leftButton: {
          onClick: handleRemoveFile,
        },
      }}
    />
  );
};

export const MultipleGrid: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(defaultArgs as any),
    mode: 'multiple',
    previewProps: {
      ...defaultArgs.previewProps,
      type: 'grid',
    },
  },

  render: (args) => <MultipleFileInputExample {...args} />,
};

export const MultipleList: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(defaultArgs as any),
    mode: 'multiple',
    fileInputProps: {
      ...defaultArgs.fileInputProps,
      description: `فرمت‌های قابل قبول JPG , PNG
حداکثر حجم تا 5Mb`,
    },
    previewProps: {
      ...defaultArgs.previewProps,
      type: 'list',
    },
  },

  render: (args) => <MultipleFileInputExample {...args} />,
};
