export const getItemHeight = (itemRefs: (HTMLDivElement | null)[]): number => {
  return itemRefs[0]?.getBoundingClientRect().height ?? 64;
};

export const scrollToValue = (
  container: HTMLDivElement | null,
  items: number[],
  value: number,
  getItemHeightFn: () => number,
  behavior: ScrollBehavior = 'instant',
) => {
  if (!container) return;

  const index = items.indexOf(value);
  if (index === -1) return;

  container.scrollTo({
    top: index * getItemHeightFn(),
    behavior,
  });
};

export type TimeValue = { hour: number | null; minute: number | null };

export const isValidHour = (h: string): boolean => {
  if (h.length !== 2) return false;
  const n = Number(h);
  return !Number.isNaN(n) && n >= 0 && n <= 23;
};

export const isValidMinute = (m: string): boolean => {
  if (m.length !== 2) return false;
  const n = Number(m);
  return !Number.isNaN(n) && n >= 0 && n <= 59;
};

export const editableIndices = [0, 1, 3, 4];

export const formatToMask = (value?: TimeValue): string[] => {
  if (!value) return ['-', '-', ':', '-', '-'];
  const hh = value.hour == null ? '--' : String(value.hour).padStart(2, '0');
  const mm = value.minute == null ? '--' : String(value.minute).padStart(2, '0');
  return [hh.charAt(0) ?? '-', hh.charAt(1) ?? '-', ':', mm.charAt(0) ?? '-', mm.charAt(1) ?? '-'];
};

export const maskToValue = (maskChars: string[]): TimeValue => {
  const hh = `${maskChars[0] ?? '-'}${maskChars[1] ?? '-'}`;
  const mm = `${maskChars[3]}${maskChars[4]}`;
  return {
    hour: !hh.includes('-') && isValidHour(hh) ? Number(hh) : null,
    minute: !mm.includes('-') && isValidMinute(mm) ? Number(mm) : null,
  };
};

export const nextEditableIndex = (index: number, forward = true): number => {
  const cur = editableIndices.indexOf(index);
  if (cur === -1) {
    return forward ? (editableIndices[0] ?? 0) : (editableIndices[editableIndices.length - 1] ?? 0);
  }
  const next = forward ? cur + 1 : cur - 1;
  if (next < 0) return editableIndices[0] ?? 0;
  if (next >= editableIndices.length) return editableIndices[editableIndices.length - 1] ?? 0;
  return editableIndices[next] ?? 0;
};
