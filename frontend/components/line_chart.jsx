import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
  render() {
    let data = {
      labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          skipLabels: 3,
          data: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            82,
            9,
            12,
            153,
            14,
            15,
            16,
            17,
            263,
            24,
            27,
            47,
            49
          ]
        }
      ]
    };
    let options = {
      legend: {
        display: false
      }
    };

    return <Line data={data} className="line" options={options} redraw />;
  }
}

export default LineChart;
