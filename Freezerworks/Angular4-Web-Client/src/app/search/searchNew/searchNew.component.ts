import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SearchService } from '../search.service';
import { ISearchTabState } from '../searchInterfaces/ISearchTabState';
import { ISearchTabs } from '../searchInterfaces/ISearchTabs';
import { FieldSelectDialogComponent } from '../field-select-dialog/field-select-dialog.component';

@Component({
  templateUrl: './searchNew.component.html',
  styleUrls: ['./searchNew.component.css']
})
export class SearchNewComponent implements OnInit {
  searchTabState: ISearchTabState;
  tabs: ISearchTabs[];
  searchTables: string[];

  groups: {
    name: string,
    selected: boolean
  }[] = [
    {name: 'Default Group', selected: true},
    {name: 'Group 1', selected: false},
    {name: 'Group 2', selected: false},
    {name: 'Group 3', selected: false},
    {name: 'Group 4', selected: false},
    {name: 'Group 5', selected: false}
  ];

  searchParams: {
    field: string,
    comparator: string,
    value: string
  }[] = [
    {
      field: '',
      comparator: '',
      value: ''
    }
  ];

  resultFilters: {
    limit: number,
    minAliquotsPerSample: number,
    maxAliquotsPerSampleToReturn: number
  } = {
    limit: 0,
    minAliquotsPerSample: 0,
    maxAliquotsPerSampleToReturn: 0
  };

  resultFilterChecks: {
    value: string,
    selected: boolean
  }[] = [
    {value: 'limit', selected: false},
    {value: 'maxMin', selected: false},
    {value: 'random', selected: false}
  ];

  listViews: string[] = [
    'System Default',
    'List View 1',
    'List View 2',
    'List View 3',
    'List View 4',
  ];

  tabState: number;
  assignedGroups: string[] = [];
  selectedResultFilters: string[] = [];
  searchName: string = '';
  returnRecordsIn: string;
  selectedListView: string = this.listViews[0];

  constructor(private dialog: MatDialog, private _searchService: SearchService) { }

  ngOnInit() {
    this.searchTabState = this._searchService.SearchTabState;
    this.tabs = this._searchService.SearchTabs;
    this.searchTables = this._searchService.SearchTables;
    
    this.tabState = this.searchTabState.null;
    this.returnRecordsIn = this.searchTables[1];
  }

  onTabClick(tabIndex: number): void {
    if(this.tabState === tabIndex) {
      this.tabState = this.searchTabState.null;
    } else {
      this.tabState = tabIndex;
    }
  };

  addLine(): void {
    this.searchParams.push({
      field: '',
      comparator: '',
      value: ''
    })
  };

  removeLine(lineIndex: number): void {
    this.searchParams.splice(lineIndex, 1);
  };

  isSamplesOrAliquots() {
    return (this.returnRecordsIn === this.searchTables[1]) ||
           (this.returnRecordsIn === this.searchTables[2]) ? true : false;
  };

  selectedFilterIncludes(value: string) {
    return this.selectedResultFilters.includes(value) ? true: false;
  }

  openFieldDialog(index: number): void {

    let dialogRef = this.dialog.open(FieldSelectDialogComponent, {
      width: '80%'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Dialog was Closed: ', result);
      console.log("index: ", index);
      console.log('searchline: ',this.searchParams[index]);

      this.searchParams[index].field = result;
      console.log('searchParams: ',this.searchParams);
    })
  }

  testSomething(resultFilters): void {
    console.log("resultFilters: ", resultFilters.selectedOptions)
  }
}