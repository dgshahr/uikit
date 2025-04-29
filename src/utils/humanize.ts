const digitsMap = {
  // Persian
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',

  // Arabic
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',

  // Bold
  '𝟎': '0',
  '𝟏': '1',
  '𝟐': '2',
  '𝟑': '3',
  '𝟒': '4',
  '𝟓': '5',
  '𝟔': '6',
  '𝟕': '7',
  '𝟖': '8',
  '𝟗': '9',
};

const digitCharsRegex = RegExp(`[${Object.keys(digitsMap).join()}]`, 'gu');

export function sanitizeDigits(input: string): string {
  return input.replace(digitCharsRegex, (match) => digitsMap[match as keyof typeof digitsMap]);
}

export function humanize(input: number | string): string {
  let temp = typeof input === 'number' ? input.toString() : input;
  temp = temp.toString();
  temp = sanitizeDigits(temp);
  temp = temp.replace(/[^-.\d]/g, '');
  temp = temp.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return temp;
}

export function deHumanize(input: string) {
  return Number(input.split(',').join(''));
}
