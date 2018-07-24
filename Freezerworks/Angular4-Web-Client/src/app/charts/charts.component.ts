import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  templateUrl: './charts.component.html',
  styleUrls: [
    './charts.component.css',
  ],
})
export class ChartsComponent implements OnInit {
  @ViewChild('myChart') myChart: ElementRef;

  chart;

  constructor() { }

  ngOnInit() {
    let ctx = this.myChart.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Visit 1", "Visit 2", "Visit 3", "Visit 4", "Visit 5", "Visit 6"],
          datasets: [
            {
              label: 'Samples Received',
              data: [25, 50, 75, 100, 150, 200],
              backgroundColor: 'rgba(225,0,0,.5)',
              borderColor: 'green',
              borderWidth: 1
            },
            {
              label: 'Samples Not Received',
              data: [75, 75, 75, 75, 50, 25],
              backgroundColor: 'rgba(0,0,255,.5)',
              borderColor: 'orange',
              borderWidth: 1
            },
            {
              label: 'Expected Samples',
              data: [100, 125, 150, 175, 200, 225],
              backgroundColor: 'rgba(128,0,128,.5)',
              borderColor: 'yellow',
              borderWidth: 1
            },
          ]
      },
      options: {
          scales: {
              // xAxes: [{
              //     stacked: true,
              // }],
              yAxes: [{
                  // stacked: true,
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    })
  }

  update(event: Event): void {
    console.log("event", event);
  }

}