import type { FC } from 'react';
import { useDatepickerContext } from './context';
import Days from './Days';
import Months from './Months';
import { DateTypes } from './types';
import Years from './Years';

const Body: FC = () => {
  const { dateType } = useDatepickerContext();

  switch (dateType) {
    case DateTypes.Day:
      return <Days />;
    case DateTypes.Month:
      return <Months />;
    case DateTypes.Year:
      return <Years />;
    default:
      return null;
  }
};

export default Body;
