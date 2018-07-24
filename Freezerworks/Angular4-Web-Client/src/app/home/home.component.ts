import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //force angular to not encapsulate the css basically forces basic html.
  //See: https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  panelState: number = 0;

  panel: object = {
    none: 0,
    searchPanel: 1,
    importPanel: 2,
    workflowsPanel: 3,
    requisitionsPanel: 4
  };

  sections: Array<object> = [
    {
      title: 'Search',
      options: [
        {
          optionTitle: 'Create New Search',
          route: '/search/new'
        },
        {
          optionTitle: 'Run Saved Search',
          route: ''
        },
        {
          optionTitle: 'Search By ID',
          route: '/searchById/'
        }
      ],
      toggleVar: "panel.searchPanel"
    },
    {
      title: 'Import',
      options: [
        {
          optionTitle: 'Import Data',
          route: ''
        },
        {
          optionTitle: 'View Previous Import',
          route: ''
        }
      ],
      toggleVar: "panel.importPanel"
    },
    {
      title: 'Workflows',
      options: [
        {
          optionTitle: 'View Workflow History',
          route: ''
        },
        {
          optionTitle: 'Check In with Flatbed Scanner',
          route: ''
        },
        {
          optionTitle: 'Check Out with Flatbed Scanner',
          route: ''
        }
      ],
      toggleVar: "panel.workflowsPanel"
    },
    {
      title: 'Requisitions',
      options: [
        {
          optionTitle: 'Create Requisition',
          route: ''
        },
        {
          optionTitle: 'View Previous Requisitions',
          route: ''
        }
      ],
      toggleVar: "panel.requisitionsPanel"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  togglePanel(panel: number): void {
    this.panelState = panel;
  }

}
