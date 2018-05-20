import React from 'react';
import DonutChart from './donut_chart';
import LineChart from './line_chart';

class Charts extends React.Component {
  render() {
    let price;
    if (!this.props.price) {
      price = '';
    }
    let remiander = (this.props.price % 1000).toString();
    price = Math.floor(this.props.price / 1000);
    price = price > 0 ? `$${price},${remiander}` : `$${remiander}`;
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
            <h1 className={`animated ${animation} price`}>
              {this.props.price}
            </h1>
            <DonutChart price={this.props.price} />
          </div>
          <div className="line-chart">
            <LineChart />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
