import type { FC } from 'react';
import SpinnerLoading from '@/src/common/SpinnerLoading';
import { useTableContext } from './context';

const TBodyLoading: FC = () => {
  const { columns, loading } = useTableContext();
  return (
    <tbody>
      <tr>
        <td
          className="dgsuikit:p-10"
          colSpan={columns.length}
        >
          <SpinnerLoading
            width={typeof loading !== 'boolean' ? loading!.size : 100}
            height={typeof loading !== 'boolean' ? loading!.size : 100}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TBodyLoading;
