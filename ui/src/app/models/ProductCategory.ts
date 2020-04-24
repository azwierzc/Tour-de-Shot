export interface ProductCategory {
  id: number;
  name: string;
  hasChild: boolean;
  parentId: number;
}
