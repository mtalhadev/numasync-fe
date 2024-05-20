export type TabsItem = {
  title: string;
  key: string | number;
  Description?: string;
};

export interface TabsProps {
  tabs: TabsItem[];
  selected: string;
  onChange: (_key: string | number) => void;
  isExpanded?: boolean;
}
