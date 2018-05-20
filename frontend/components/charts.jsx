import React from 'react';
import DonutChart from './donut_chart';
import LineChart from './line_chart';

class Charts extends React.Component {
  render() {
    let price;
    if (this.props.price) {
      price = `${this.props.price}`;
    }
    const animationList = [
      'bounce',
      'pulse',
      'headShake',
      'tada',
      'jello',
      'bounceIn',
      'fadeIn',
      'flipInX',
      'flipInY',
      'zoomIn'
    ];

    let animation =
      animationList[
        Math.floor(Math.random() * Math.floor(animationList.length))
      ];

    return (
      <div className="price-container">
        <div className="charts">
          <div className="donut-chart">
            <h1 className={`animated ${animation} price`}>{price}</h1>
            <DonutChart price={this.props.price} />
          </div>
          <div className="line-chart">
            <LineChart data={this.props.hash} />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
