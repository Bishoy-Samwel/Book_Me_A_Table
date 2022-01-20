/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useReducer, useState } from 'react';

export default function ReserveForm() {
  const formReducer = (state, event) => ({
    ...state,
    [event.name]: event.value,
  });

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const addRestaurant = async (formdata) => {
    try {
      const response = await fetch('api/v1/restaurants', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    addRestaurant(formData);
    console.log(formData);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-1">
          <label>Add A Restaurant</label>
          <input type="text" className="form-control" placeholder="Restaurant Name" name="name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" className="form-control" placeholder="Country" name="country" onChange={handleChange} />
        </div>
        <div className="form-group my-1">
          <label>City</label>
          <input type="text" className="form-control" placeholder="City" name="city" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleChange} />
        </div>
        <div className="form-group my-1">
          <label>Price</label>
          <input type="text" className="form-control" placeholder="Price" name="price" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Phone number" name="phone" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" placeholder="https://imageurl.com.jpg" name="img_url" onChange={handleChange} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-2">Add Restaurant</button>
        </div>
      </form>
    </div>
  );
}
