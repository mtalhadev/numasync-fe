export type RadioItemType = { value: string; title: string; description?: string };

export interface CustomRadioGroupProps {
  options: RadioItemType[];
  selected: string;
  setSelected: (_item: string) => void;
}
