import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task12_charts';
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  public graphData = {
    "status": "TRUE",
    "msg": "Data load successfully.",
    "value": {
      "graphData": {
        "category": [
          "Mar-24", "Apr-24", "May-24", "Jun-24", "Jul-24", "Aug-24", "Sep-24", "Oct-24", "Nov-24", "Dec-24", "Jan-25", "Feb-25"
        ],
        "price_data": [
          6.99, 8.06, 7.94, 7.29, 6.85, 6.72, 6.86, 7, 6.21, 6.31, 6.31, 6.32
        ],
        "volume_data": [
          2331216, 7102800, 7081992, 4840560, 3393888, 2904672, 2753280, 2173896, 978480, 978360, 978360, 31464
        ]
      },
      "latestPublish": {
        "title": "MINDSPACE BUSINESS PARKS PRIVATE LIMITED/Short/23-24/RA/196",
        "publish_on": "25-01-2024 15:00:00",
        "qty": 1095,
        "price": 4.25
      }
    }
  }

constructor() {
  this.chartOptions = {
    series: [
      {
        name: "Volume",
        type: "column",
        data: this.graphData.value.graphData.volume_data
      },
      {
        name: "Price",
        type: "line",
        data: this.graphData.value.graphData.price_data
      }
    ],
    chart: {
      height: 450,
      type: "line"
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: this.graphData.value.graphData.category,
    yaxis: [
      {
        title: {
          text: "Volume(MWh)"
        }
      },
      {
        opposite: true,
        title: {
          text: "Price(Rs.)"
        },
      }
    ]
  };
}

}
