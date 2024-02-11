import React from 'react'
import Form from 'react-bootstrap/Form';

const FilterByRate = ({rating, setRating}) => {
  return (
    <div>
      <Form.Control
        type="number"
        placeholder="Filter by rate"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />
    </div>
  )
}

export default FilterByRate
