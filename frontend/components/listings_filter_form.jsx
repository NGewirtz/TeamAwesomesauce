import React from 'react';

class ListingsFilterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  updateBedroomsFilter() {
    let bedroomSelect = document.getElementById('filter-bedroom-select');
    let bedroomValue = bedroomSelect.value;
    this.props.updateFilter("bedrooms", bedroomValue);
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
          <div>
            <select id="filter-bedroom-select" name="bedrooms" onChange={() => this.updateBedroomsFilter()}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

}

export default ListingsFilterForm;
