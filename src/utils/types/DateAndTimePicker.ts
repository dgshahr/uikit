export interface IRangeDate {
  start: Date | null;
  end: Date | null;
}

interface WithSubmitButton {
  showSubmitButton?: true;
  onSubmit?: () => void;
}

interface WithoutSubmitButton {
  showSubmitButton?: false;
  onSubmit?: never;
}

export interface WithRange {
  acceptRange: true;
  value: IRangeDate;
  onChange: (value: WithRange['value']) => void;
}

interface WithoutRange {
  acceptRange?: false;
  value: Date | null;
  onChange: (value: Date) => void;
}

export type HasOrNotSubmitButton = WithSubmitButton | WithoutSubmitButton;
export type HasOrNotRange = WithRange | WithoutRange;
