/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function ReserveForm() {
  return (
    <div>
      <form>
        <div className="form-group my-1">
          <label>Add A Restaurant</label>
          <input type="email" className="form-control" placeholder="Restaurant Name" id="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" className="form-control" placeholder="Country" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group my-1">
          <label>City</label>
          <input type="text" className="form-control" placeholder="City" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Address" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group my-1">
          <label>Price</label>
          <input type="text" className="form-control" placeholder="Price" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Phone number" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" placeholder="https://imageurl.com.jpg" id="pwd" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit" className="btn btn-primary my-2">Add Restaurant</button>
        </div>
      </form>
    </div>
  );
}
