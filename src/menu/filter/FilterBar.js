import React, {useState} from 'react';
import "./filter-bar.css";

const FilterBar = ({filterResult, cusines, onNameFilter}) => {
  const [filters, setFilters] = useState({
    name: "",
    cusine: ""
  })

  const handleInput = (field) => (event) => {
    const {value} = event.target;
    console.log(value);

    setFilters({
      ...filters,
      [field]: value
    })

    switch(field) {
      case "name":
        onNameFilter(value)
        break
      case "cusine": 
        filterResult(value)
        break;
      default: 
        break;
    }
  }

  return (
    <div className="filter-bar">
      {/* <div className="filter-search">
        <label htmlFor="">Search</label>
        <input type="text" id="name" value={filters.name} onChange={handleInput("name")}/>
      </div> */}
      <div className="">
        <label htmlFor="">Cusine</label>
        <br />
        <select name="cusine" id="cusine" onChange={handleInput("cusine")}>
          <option value="">All Items</option>
          {cusines.map((cusine) => (
            <option 
              value={cusine}
              key={cusine}
            >
              {cusine}
            </option>
          ))}
        </select> 
        {/* <button onClick={() => filterResult('')}>All</button>
        <button onClick={() => filterResult('Thai')}>Thai</button>
        <button onClick={() => filterResult('Indian')}>Indian</button>
        <button onClick={() => filterResult('Italian')}>Italian</button>
        <button onClick={() => filterResult('Chinese')}>Chinese</button>
        <button onClick={() => filterResult('Mexican')}>Mexican</button> */}
      </div>
    </div>
  )
}

export default FilterBar