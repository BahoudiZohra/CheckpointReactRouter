import React from 'react'
import Form from 'react-bootstrap/Form';

const FilterByName = ({inputSearch, setInputSearch}) => {
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Filter by name"
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
      />
    </div>
  )
}

export default FilterByName
