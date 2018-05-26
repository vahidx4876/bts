


import { Component, OnInit , AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-bts-chart-js',
  templateUrl: './bts-chart-js.component.html',
  styleUrls: ['./bts-chart-js.component.scss']
})
export class BtsChartJsComponent implements OnInit , AfterViewInit {

  chart = [];
  @ViewChild('canvas') mycanvas:ElementRef;
  
  constructor(private _weather: WeatherService) {}

  ngOnInit() {
  

  } 

  ngAfterViewInit() {
    this.createChart();
  }
  createChart(){
    this._weather.dailyForecast()
      .subscribe(res => {
        console.log(res);
        let temp_max = res['list'].map(res => res.main.temp_max)
        let temp_min = res['list'].map(res => res.main.temp_min)
        let alldates = res['list'].map(res => res.dt)

        let weatherDates = []
        alldates.forEach((res) => {

    
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        })
        let ctx = this.mycanvas.nativeElement.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: true
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
  
}

}