import clsx from 'clsx';
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  type Dispatch,
  type SetStateAction,
} from 'react';
import SearchIcon from '@/src/icons/Search';
import OptionItem from './OptionItem';
import type { SelectProps, SelectWithMultipleMode, SelectWithSingleMode } from './types';
import Input from '../Input';

type OptionsProps<T> = Partial<SelectProps<T>> & {
  setIsShowOptions: Dispatch<SetStateAction<boolean>>;
};

const VISIBLE_ITEM_COUNT = 20;

const Options = <T,>(props: OptionsProps<T>) => {
  const {
    options,
    mode = 'single' as 'single' | 'multiple',
    afterOptions,
    beforOptions,
    onChange,
    searchable = true,
    setIsShowOptions,
    separateSelectedOptions = true,
    optionsTitle = 'عنوان',
    value,
    optionCellClassName,
  } = props;
  const [search, setSearch] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const itemClassName = clsx(
    'dgs-ui-kit-border-t dgs-ui-kit-border-solid dgs-ui-kit-border-gray-100',
    ((!searchable && !beforOptions) || (mode === 'multiple' && separateSelectedOptions)) &&
      'first-of-type:dgs-ui-kit-border-t-0',
    Boolean(afterOptions) && 'last-of-type:dgs-ui-kit-border-b',
  );

  const filteredOptions = useMemo(() => {
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
    const optionsContainerOffsetTop = containerRef.current.offsetTop;
    const visibleStart = Math.floor((scrollTop - optionsContainerOffsetTop) / itemHeight);

    setStartIndex(visibleStart >= 0 ? visibleStart : 0);
  }, [itemHeight]);

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
        setIsShowOptions(false);
      }
    },
    [value],
  );

  return (
    <>
      {searchable && (
        <Input
          containerClassName={clsx(
            'dgs-ui-kit-mx-3',
            beforOptions ? 'dgs-ui-kit-mb-2' : 'dgs-ui-kit-mb-3',
          )}
          placeholder="جستجوی عنوان"
          onChange={(e) => setSearch(e.currentTarget.value)}
          rightIcon={
            <SearchIcon
              width={20}
              height={20}
            />
          }
        />
      )}
      {beforOptions}
      {mode === 'multiple' && separateSelectedOptions && selectedOptions.length > 0 && (
        <>
          <p className="dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-400 dgs-ui-kit-px-3 dgs-ui-kit-py-2">{`${optionsTitle}‌های انتخاب شده`}</p>
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
          <p className="dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-400 dgs-ui-kit-px-3 dgs-ui-kit-py-2">{`${optionsTitle}‌ها`}</p>
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
      </>
      {afterOptions}
    </>
  );
};

export default Options;
