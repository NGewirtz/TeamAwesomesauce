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
          <div>
            <label for="bedrooms">Bedrooms</label>
            <select id="filter-bedroom-select" name="bedrooms" onChange={() => this.updateBedroomsFilter()}>
              <option value="All">All</option>
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
