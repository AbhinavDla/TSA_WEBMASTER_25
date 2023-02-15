import React, {useState} from 'react';
import "./filter-bar.css";

const FilterBar = ({cusines}) => {

  return (
    <div className="filter-bar">
      Cusine
      <div className="">
        <select name="" id="cusine">
          <option value="">Select</option>
          {cusines.map((cusine) => (
            <option 
              value={cusine}
              key={cusine}
            >
              {cusine}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar