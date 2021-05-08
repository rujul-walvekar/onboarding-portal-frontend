import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chart1 = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Trends for Skills across Locations'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Angular',
      data: [107, 31, 635, 203, 2],
      type:"bar"
    }, {
      name: 'Java',
      data: [133, 156, 947, 408, 6],
      type:"bar"
    }, {
      name: 'C++',
      data: [814, 841, 3714, 727, 31],
      type:"bar"
    }, {
      name: '.NET',
      data: [12, 10, 36, 38, 40],
      type:"bar"
    }],
    xAxis: {
      categories: ['Mubai', 'Pune', 'Chennai', 'Hyderabad', 'Bangalore'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Demand (hundreds)',
        align: 'high'
      },
    },
    legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    shadow: true
    }
  });

  
  chart3= new Chart({
    chart: {
    type: 'column'
  },
  title: {
    text: 'Skills over one Year for C++, Java, Angular, .NET'
  },
  
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Skills'
    }
  },
  
  series: [{
    name: 'C++',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    type:'column'

  }, {
    name: 'Java',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
    type:'column'

  }, {
    name: 'Angular',
    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
    type:'column'

  }, {
    name: '>NET',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
    type:'column'

  }]
  })

chart4= new Chart({
  chart:{
    type: 'line'
  },
  title: {
    text: 'Salary Growth for Job Roles'
  },
  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  xAxis: {
    categories: ['2006','2008','2010', '2012', '2014', '2016', '2018', '2020']
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
series: [{
    name: 'Data Scientist',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    type:"line"
  }, {
    name: 'Software Developer',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    type:"line"
  }, {
    name: 'Full Stack Developer',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    type:"line"
  }, {
    name: 'Solution Architect',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    type:"line"
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    type:"line"
  }]
})
}