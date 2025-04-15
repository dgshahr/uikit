export const englishToPersian = (s: string): string =>
  s.replace(/\d/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)] ?? '');
export const englishToArabic = (s: string): string =>
  s.replace(/\d/g, (d: string) => '٠١٢٣٤٥٦٧٨٩'[parseInt(d)] ?? '');

export const persianToEnglish = (s: string): string =>
  s.replace(/[۰-۹]/g, (d: string) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));
export const arabicToEnglish = (s: string): string =>
  s.replace(/[٠-٩]/g, (d: string) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));

export const persianToArabic = (s: string): string =>
  s.replace(/[۰-۹]/g, (d: string) => '٠١٢٣٤٥٦٧٨٩'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)] ?? '');
export const arabicToPersian = (s: string): string =>
  s.replace(/[٠-٩]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)] ?? '');

export const extractNumber = (s: string) => Number(s.replace(/[^0-9.]+/g, ''));
