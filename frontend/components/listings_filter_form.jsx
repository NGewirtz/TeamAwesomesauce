import React from 'react';

class ListingsFilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.updateFilter = this.updateFilter.bind(this);
  }

  createNeighborhoodOptions() {
    let neighborhoods = ["West Village", "Hudson Heights", "Noho","Midtown",
    "Upper West Side","Midtown West","Greenwich Village","Upper East Side",
    "Jersey City","Riverdale","Union Square","DUMBO","Williamsburg",
    "Fort Greene","Inwood","Tribeca","Financial District","Harlem",
    "Battery Park City","Marble Hill","NoMad","Downtown Brooklyn","Bushwick",
    "Gramercy","Flatiron","Midtown East","Nolita","Washington Heights",
    "Kips Bay","Chelsea","Carroll Gardens","Cobble Hill","Meatpacking",
    "East Williamsburg","Lower East Side","Edgewater Borough","Crown Heights",
    "East Village","Brooklyn Heights", "Greenpoint","Forest Hills",
    "East Flatbush","Bedford-Stuyvesant","Corona","Soho","Clinton Hill",
    "Long Island City","Roosevelt Island","Hunts Point","Midwood","Georgetown"].sort();
    return neighborhoods.map(neighborhood => (
      <option value={neighborhood}>{neighborhood}</option>
    ));
  }

  updateFilter() {
    let bedroomFilter = document.getElementById("filter-bedroom-select");
    let bedroomValue = bedroomFilter.value;
    let bathroomFilter = document.getElementById("filter-bathroom-select");
    let bathroomValue = bathroomFilter.value;
    let neighborhoodFilter = document.getElementById("filter-neighborhood-select");
    let neighborhoodValue = neighborhoodFilter.value;
    this.props.handleChange(bedroomValue, neighborhoodValue, bathroomValue);
  }

  render() {
    return (
      <div className="filter-form-container">
        <div className="filter-price">
          <div>
            <label htmlFor="bedrooms">Bedrooms</label>
            <select id="filter-bedroom-select" name="bedrooms" onChange={this.updateFilter}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <label htmlFor="bathrooms">Bathrooms</label>
            <select id="filter-bathroom-select" name="bathrooms" onChange={() => this.updateFilter()}>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
              <option value="5.5">5.5</option>
            </select>
            <label htmlFor="neighborhoods">Neighborhood</label>
            <select id="filter-neighborhood-select" name="neighborhoods" onChange={() => this.updateFilter()}>
              {this.createNeighborhoodOptions()}
            </select>
          </div>
        </div>
      </div>
    );
  }

}

export default ListingsFilterForm;
