import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { SearchService } from '../search.service';
import { IField } from '../../shared/interfaces/IField'

@Component({
  templateUrl: './field-select-dialog.component.html',
  styleUrls: ['./field-select-dialog.component.css']
})
export class FieldSelectDialogComponent implements OnInit {
  fieldData: object[];
  fields: object[];
  tableTabs: string[];
  searchTerm: string = '';
  
  constructor(private dialogRef: MatDialogRef<FieldSelectDialogComponent>,
              private _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.getFields()
      .subscribe(
        fieldData => {
          console.log("fieldDate: ", fieldData)
          this.fieldData = fieldData;
          this.fields = fieldData;
        },
        error => {
          console.log("error: ", error)
      })

    this._setFieldTabs(this._searchService.SearchTables);
  }

  selectField(field: string): void {
    console.log("Field: ", field)
    this.dialogRef.close(field);
  }

  filterFields(table) {
    console.log("feilds: ", this.fieldData)
    if(table === 'All') { this.fields = this.fieldData; return}

    this.fields = this.fieldData.filter((field: IField) => {
      return field.table == table;
    })
  }

  searchFilter() {    
    let filteredFields: object[] = [];

    this.fieldData.forEach((field: IField) => {
      if(field.fieldDisplayName.includes(this.searchTerm)) {
        filteredFields.push(field)
      }
    })

    this.fields = filteredFields;
  }

  private _setFieldTabs(tabs) {
    this.tableTabs = ['All'];

    tabs.forEach(tab => {
      this.tableTabs.push(tab)
    })
  }
}
