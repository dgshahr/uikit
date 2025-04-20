import clsx from 'clsx';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import IconSearch from '@/src/icons/IconSearch';
import focusAndOpenKeyboard from '@/src/utils/focusAndOpenKeyboard';
import OptionItem from './OptionItem';
import type { SelectProps, SelectWithMultipleMode, SelectWithSingleMode } from './types';
import Button from '../../Button';
import Input, { type InputProps } from '../Input';
import { usePickerWrapperContext } from '../Wrappers/PickerWrapper/contexts';

const VISIBLE_ITEM_COUNT = 20;

const Options = <T,>(props: SelectProps<T>) => {
  const {
    options,
    mode = 'single' as 'single' | 'multiple',
    afterOptions,
    beforOptions,
    onChange,
    searchable = true,
    separateSelectedOptions = true,
    optionsTitle = 'عنوان‌ها',
    value,
    optionCellClassName,
    emptyContent = 'نتیجه‌ای یافت نشد !',
    showClearButtonOnEmpty = true,
  } = props;
  const [search, setSearch] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleWrapperVisibility } = usePickerWrapperContext();

  const itemClassName = clsx(
    'dgs-ui-kit-border-t dgs-ui-kit-border-solid dgs-ui-kit-border-gray-100',
    ((!searchable && !beforOptions) || (mode === 'multiple' && separateSelectedOptions)) &&
      'first-of-type:dgs-ui-kit-border-t-0',
    Boolean(afterOptions) && 'last-of-type:dgs-ui-kit-border-b',
  );
  let isSearchable: boolean;
  const inputSearchable = searchable as InputProps;

  if (typeof searchable === 'boolean') isSearchable = searchable;
  else {
    isSearchable = Object.keys(searchable).length > 0;
  }

  const filteredOptions = useMemo(() => {
    if (!Array.isArray(options)) {
      throw new Error('options should be array');
    }
    if (search) {
      return options?.filter((option) => option.label.includes(search));
    }
    return options;
  }, [search, options]);

  const selectedOptions = useMemo(() => {
    if (mode === 'multiple' && separateSelectedOptions) {
      return options?.filter((option) => (value as T[]).includes(option.value)) ?? [];
    }
    return [];
  }, [options, value]);

  const visibleOptions = useMemo(() => {
    let optionsList = filteredOptions;
    if (mode === 'multiple' && separateSelectedOptions) {
      optionsList = optionsList?.filter((option) => !(value as T[]).includes(option.value));
    }
    const endIndex = Math.min(startIndex + VISIBLE_ITEM_COUNT, optionsList?.length ?? 0);
    return optionsList?.slice(startIndex, endIndex);
  }, [filteredOptions, startIndex, value]);

  const itemHeight = containerRef?.current?.children[0]?.clientHeight ?? 50;
  const totalHeight = (filteredOptions?.length ?? 0) * itemHeight;

  const handleScroll = useCallback(() => {
    const container = containerRef?.current?.parentElement;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const optionsContainerOffsetTop = containerRef.current!.offsetTop;
    const visibleStart = Math.floor((scrollTop - optionsContainerOffsetTop) / itemHeight);

    setStartIndex(visibleStart >= 0 ? visibleStart : 0);
  }, [itemHeight]);

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isSearchable) focusAndOpenKeyboard(document.getElementById('search-input'), 400);
  }, []);

  const handleChange = useCallback(
    (optionValue: T) => {
      if (typeof onChange !== 'function') return;

      if (mode === 'multiple') {
        const newValue = [...((value as T[]) ?? [])];
        if (newValue.includes(optionValue)) newValue.splice(newValue.indexOf(optionValue), 1);
        else newValue.push(optionValue);
        (onChange as SelectWithMultipleMode<T>['onChange'])(newValue);
      } else {
        (onChange as SelectWithSingleMode<T>['onChange'])(optionValue);
        toggleWrapperVisibility();
      }
    },
    [value],
  );

  return (
    <>
      {isSearchable && (
        <Input
          id="search-input"
          wrapperClassName={clsx(
            'dgs-ui-kit-sticky dgs-ui-kit-top-0 dgs-ui-kit-pt-3 dgs-ui-kit-right-0 dgs-ui-kit-bg-white dgs-ui-kit-z-10 dgs-ui-kit-px-3',
            beforOptions ? 'dgs-ui-kit-pb-2' : 'dgs-ui-kit-pb-3',
            inputSearchable?.wrapperClassName,
          )}
          placeholder={inputSearchable?.placeholder ?? 'جستجوی عنوان'}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          rightIcon={
            inputSearchable?.rightIcon ?? (
              <IconSearch
                width={20}
                height={20}
              />
            )
          }
          {...(typeof searchable === 'object' ? searchable : {})}
        />
      )}
      {beforOptions}
      {mode === 'multiple' && separateSelectedOptions && selectedOptions.length > 0 && (
        <>
          <p className="dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-400 dgs-ui-kit-px-3 dgs-ui-kit-py-2">{`${optionsTitle}‌ی انتخاب شده`}</p>
          {selectedOptions.map((option) => (
            <OptionItem
              key={option.value as number | string}
              onClick={() => handleChange(option.value)}
              option={option}
              optionCellClassName={clsx(itemClassName, optionCellClassName)}
              {...props}
            />
          ))}
        </>
      )}
      <>
        {mode === 'multiple' && separateSelectedOptions && (
          <p className="dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-400 dgs-ui-kit-px-3 dgs-ui-kit-py-2">
            {optionsTitle}
          </p>
        )}
        <div
          ref={containerRef}
          className="dgs-ui-kit-relative"
          style={{ height: totalHeight }}
        >
          {visibleOptions?.map((option, index) => (
            <div
              key={option.value as number | string}
              className={clsx('dgs-ui-kit-absolute dgs-ui-kit-w-full', itemClassName)}
              style={{ top: `${(startIndex + index) * itemHeight}px` }}
            >
              <OptionItem
                onClick={() => handleChange(option.value)}
                option={option}
                {...props}
              />
            </div>
          ))}
        </div>
        {!visibleOptions?.length && !selectedOptions.length && (
          <div className="dgs-ui-kit-text-center dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-items-center dgs-ui-kit-mt-2">
            <p className="dgs-ui-kit-text-gray-500 dgs-ui-kit-font-p3-medium">{emptyContent}</p>
            {showClearButtonOnEmpty && (
              <Button
                type="button"
                className="dgs-ui-kit-mt-1"
                variant="text"
                size="small"
                onClick={() => setSearch('')}
              >
                پاک کردن
              </Button>
            )}
          </div>
        )}
      </>
      {afterOptions}
    </>
  );
};

export default Options;
