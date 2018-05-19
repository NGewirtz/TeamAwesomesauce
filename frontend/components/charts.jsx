import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { price: 5000 };
  }

  render() {
    const animationList = [
      'bounce',
      'flash',
      'pulse',
      'rubberBand',
      'shake',
      'headShake',
      'swing',
      'tada',
      'wobble',
      'jello',
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceInUp',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'flipInX',
      'flipInY',
      'lightSpeedIn',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
      'hinge',
      'jackInTheBox',
      'rollIn',
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'slideInDown',
      'slideInLeft',
      'slideInRight',
      'slideInUp'
    ];
    let animation =
      animationList[
        Math.floor(Math.random() * Math.floor(animationList.length))
      ];
    let data = {
      datasets: [
        {
          data: [this.state.price],
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)'
        }
      ]
    };
    return (
      <div className="price-container">
        <h1 className={`animated ${animation} price`}>{this.state.price}</h1>
        <Doughnut data={data} width={200} height={200} />
      </div>
    );
  }
}

export default Charts;
