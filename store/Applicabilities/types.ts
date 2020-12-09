export interface interfaceApplicability {
  id: number;
  name: string;
  visible: boolean;
}
export interface interfaceApplicabilityFilter {
  id: number;
  name: string;
  level: number;
  parentId: number;
  parentTop: number;
  checkedParent?: boolean;
  children: interfaceApplicabilityFilter[];
}
export interface interfaceApplicabilityPanel {
  id: number;
  selectedMarka: string;
  selectedModel: number[];
  selectedGenerations: number[];
  dataModel: interfaceApplicabilityFilter[];
  dataGenerations: interfaceApplicabilityFilter[];
}
