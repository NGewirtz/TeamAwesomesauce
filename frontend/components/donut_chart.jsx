import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ctx: null };
  }

  componentDidMount() {
    const ctx = document
      .querySelector('.chartjs-render-monitor')
      .getContext('2d');

    this.setState({ ctx });
  }

  render() {
    let gradient;

    if (this.state.ctx) {
      let ctx = this.state.ctx;
      gradient = ctx.createLinearGradient(0, 0, 200, 0);
      gradient.addColorStop(0, '#4facfe');
      gradient.addColorStop(1, '#00f2fe');
      ctx.fillStyle = gradient;
      ctx.fillRect(10, 10, 200, 100);
    }

    let data = {
      labels: ['price'],
      datasets: [
        {
          data: [this.props.price],
          backgroundColor: gradient,
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(120, 187, 232, 0.4)'
        }
      ]
    };
    let options = {
      legend: {
        display: false
      }
    };

    return (
      <Doughnut
        className="donut"
        data={data}
        width={300}
        height={300}
        options={options}
      />
    );
  }
}

export default DonutChart;
