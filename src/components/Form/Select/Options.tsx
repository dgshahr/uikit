import clsx from 'clsx';
import { useDeferredValue, useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import SearchIcon from '@/src/icons/Search';
import OptionItem from './OptionItem';
import type { Option, SelectProps, SelectWithMultipleMode, SelectWithSingleMode } from './types';
import Input from '../Input';

type OptionsProps<T> = Partial<SelectProps<T>> & {
  setIsShowOptions: Dispatch<SetStateAction<boolean>>;
};

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
  } = props;
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);

  function handleChange(optionValue: T) {
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
  }

  let filteredOptions = useMemo(
    () =>
      deferredSearch ? options?.filter((option) => option.label.includes(deferredSearch)) : options,
    [deferredSearch],
  );
  let selectedOptions: Option<T>[] = [];
  if (mode === 'multiple' && separateSelectedOptions) {
    filteredOptions = filteredOptions?.filter((option) => !(value as T[]).includes(option.value));
    selectedOptions = options?.filter((option) => (value as T[]).includes(option.value)) ?? [];
  }

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
              {...props}
            />
          ))}
        </>
      )}
      <>
        {mode === 'multiple' && separateSelectedOptions && (
          <p className="dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-400 dgs-ui-kit-px-3 dgs-ui-kit-py-2">{`${optionsTitle}‌ها`}</p>
        )}
        {filteredOptions?.map((option) => (
          <OptionItem
            key={option.value as number | string}
            onClick={() => handleChange(option.value)}
            option={option}
            {...props}
          />
        ))}
      </>
      {afterOptions}
    </>
  );
};

export default Options;
