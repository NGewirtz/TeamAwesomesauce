import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
  render() {
    const keys = Object.keys(this.props.data);
    const values = Object.values(this.props.data);
    let data = {
      labels: keys,
      datasets: [
        {
          label: `Price VS ${this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}`,
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
          data: values
        }
      ]
    };
    let options = {
      legend: {
        display: false
      }
    };

    return <Line data={data} className="line" redraw />;
  }
}

export default LineChart;
