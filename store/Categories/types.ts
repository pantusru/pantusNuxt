export interface interfaceCategories {
  id: number;
  name: string;
  visible: boolean;
}
export interface interfaceCategoriesFilter {
  id: number;
  name: string;
  visible: boolean;
  checkedType: boolean;
  Indeterminate: boolean;
  level: number;
  parentId: number;
  children: interfaceCategoriesFilter[];
}
