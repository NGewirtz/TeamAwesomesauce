import React from 'react';
import DonutChart from './donut_chart';

class Charts extends React.Component {
  render() {
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
        <h1 className={`animated ${animation} price`}>{this.props.price}</h1>
        <div className="chart">
          <DonutChart price={this.props.price} />
        </div>
      </div>
    );
  }
}

export default Charts;
