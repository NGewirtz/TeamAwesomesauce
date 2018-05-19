import React from 'react';

class ListingsFilterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-form-container">
        <div className="filter-price">
          <div className="filter-price-checkbox">
            <input id="filter-price-input-gt1000"
            type="checkbox"
            onChange={() => this.props.updateFilter("price", 10000)} />
            <label htmlFor="filter-price-input-gt10000" id="label-gt1000">Greater Than $10000</label>
          </div>
        </div>
      </div>
    );
  }

}

export default ListingsFilterForm;
