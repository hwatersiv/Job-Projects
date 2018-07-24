export interface IField {
  active?: boolean;
  allowableEntries?: Array<any>;
  autoIncrementingNumber?: boolean;
  dataType?: string;
  fieldDisplayName?: string;
  fieldId?: number;
  fieldName?: string;
  multiSelectDropdown?: boolean;
  table?: string;
  unique?: boolean;
}