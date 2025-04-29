import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import IconArrowRight2 from '@/src/icons/IconArrowRight2';
import {
  INPUT_DEFAULT_CLASS,
  MULTIPLE_INPUT_CLASS,
  THUMB_ICON_SIZE,
  THUMB_SIZE,
} from './constants';
import RangeThumb from './Thumb';
import type { RangeInputProps, RangeValueType } from './types';

function RangeInput<T extends RangeValueType>(props: Readonly<RangeInputProps<T>>) {
  const {
    value,
    wrapperClassName,
    min,
    max,
    step = 1,
    onChange,
    disabled,
    endTitle,
    startTitle,
    showTooltip = true,
  } = props;

  const isMultipleRange = Array.isArray(value);
  const [start = 0, end = 0] = isMultipleRange ? value : [0, 0];

  const getPercent = (val: number) => ((val - min) / (max - min)) * 100;

  const handleSingleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value) as T);
  };

  const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newStart = Math.min(Number(e.target.value), end - step);
    onChange([newStart, end] as T);
  };

  const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEnd = Math.max(Number(e.target.value), start + step);
    onChange([start, newEnd] as T);
  };

  const startPercent = getPercent(isMultipleRange ? start : value);
  const endPercent = getPercent(end);

  return (
    <div {...(wrapperClassName ? { className: wrapperClassName } : {})}>
      <div className="dgs-ui-kit-relative dgs-ui-kit-group">
        <div className="dgs-ui-kit-w-full dgs-ui-kit-relative dgs-ui-kit-bg-primary-50 dgs-ui-kit-h-1 dgs-ui-kit-rounded-sm dgs-ui-kit-flex dgs-ui-kit-items-center">
          <div
            className={clsx(
              'dgs-ui-kit-h-full dgs-ui-kit-absolute dgs-ui-kit-top-0 dgs-ui-kit-rounded-sm',
              disabled ? 'dgs-ui-kit-bg-gray-300' : 'dgs-ui-kit-bg-primary-500',
            )}
            style={{
              right: isMultipleRange ? `${getPercent(start)}%` : '0%',
              width: isMultipleRange
                ? `${getPercent(end) - getPercent(start)}%`
                : `${getPercent(value)}%`,
            }}
          />
          <input
            type="range"
            min={min}
            max={isMultipleRange ? end : max}
            step={step}
            value={isMultipleRange ? start : value}
            onChange={isMultipleRange ? handleStartChange : handleSingleChange}
            disabled={disabled}
            className={clsx(
              INPUT_DEFAULT_CLASS,
              isMultipleRange && `${MULTIPLE_INPUT_CLASS} dgs-ui-kit-right-0`,
            )}
            style={{
              width: isMultipleRange ? `calc(${endPercent}% - ${THUMB_SIZE}px)` : '100%',
            }}
          />
          {isMultipleRange && (
            <input
              type="range"
              min={start}
              max={max}
              step={step}
              value={end}
              onChange={handleEndChange}
              disabled={disabled}
              className={`${INPUT_DEFAULT_CLASS} ${MULTIPLE_INPUT_CLASS} dgs-ui-kit-left-0`}
              style={{
                width: `calc(${100 - startPercent}% - ${THUMB_SIZE}px)`,
              }}
            />
          )}
        </div>
        <div
          className="dgs-ui-kit-absolute dgs-ui-kit-inset-0"
          style={{
            width: `calc(100% - ${THUMB_SIZE}px)`,
          }}
        >
          <RangeThumb
            percent={startPercent}
            disabled={disabled}
            showTooltip={showTooltip}
            value={isMultipleRange ? start : value}
            icon={
              isMultipleRange && (
                <IconArrowLeft2
                  width={THUMB_ICON_SIZE}
                  height={THUMB_ICON_SIZE}
                />
              )
            }
          />
          {isMultipleRange && (
            <RangeThumb
              percent={endPercent}
              disabled={disabled}
              showTooltip={showTooltip}
              value={end}
              icon={
                <IconArrowRight2
                  width={THUMB_ICON_SIZE}
                  height={THUMB_ICON_SIZE}
                />
              }
            />
          )}
        </div>
      </div>
      {Boolean(startTitle ?? endTitle) && (
        <div
          className={clsx(
            'dgs-ui-kit-mt-4 dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-font-p2-medium',
            disabled ? 'dgs-ui-kit-text-gray-300' : 'dgs-ui-kit-text-gray-500',
            { 'dgs-ui-kit-justify-between': startTitle && endTitle },
            { 'dgs-ui-kit-justify-start': startTitle && !endTitle },
            { 'dgs-ui-kit-justify-end': !startTitle && endTitle },
          )}
        >
          <span>{startTitle}</span>
          <span>{endTitle}</span>
        </div>
      )}
    </div>
  );
}

export default RangeInput;
export * from './types';
