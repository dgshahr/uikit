import '@/src/styles.css';

interface DividerProps {
  type: 'horizontal' | 'vertical';
  size?: 'thin' | 'thick';
  color?: 'white' | 'gray';
  className?: string;
}

function styleDivider({ type, size = 'thin', color = 'gray', className }: DividerProps) {
  const typeClassName = type === 'horizontal' ? 'dgsuikit:w-full' : 'dgsuikit:h-full';

  const sizeClassName: Record<
    Required<DividerProps>['type'],
    Record<Required<DividerProps>['size'], string>
  > = {
    horizontal: {
      thin: 'dgsuikit:h-[1px]',
      thick: 'dgsuikit:h-1',
    },
    vertical: {
      thin: 'dgsuikit:w-[1px]',
      thick: 'dgsuikit:w-1',
    },
  };

  const colorClassName = color === 'gray' ? 'dgsuikit:bg-gray-200' : 'dgsuikit:bg-gray-100';

  return [typeClassName, sizeClassName[type][size], colorClassName, className ?? '']
    .slice()
    .join(' ');
}

const Divider = (props: DividerProps) => {
  return <div className={styleDivider(props)} />;
};

export default Divider;
