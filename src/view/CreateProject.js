import React from 'react';
import './CreateProject.scss';

export default function CreateProject() {
  return (
    <div className="container createForm" style={{ maxWidth: '300px' }}>
      <h6>Featured Developers</h6>
      <label className="form-control-label"> Developer Logo Image URL</label>
      <input type="text" className="form-control form-rounded" />
      <label className="form-control-label"> Developer Name</label>
      <input type="text" className="form-control form-rounded" />
      <label className="form-control-label"> Years of experience</label>
      <input type="text" className="form-control form-rounded" />
      <label className="form-control-label"> Projects count</label>
      <input type="text" className="form-control form-rounded" />
      <label className="form-control-label"> Description</label>
      <textarea className="form-control form-rounded" rows="3"></textarea>
      <label className="form-control-label"> Project name</label>
      <input type="text" className="form-control form-rounded" />
      <label className="form-control-label"> Project location</label>
      <input type="text" className="form-control form-rounded" />
      <label className="form-control-label"> Project image URL</label>
      <input type="text" className="form-control form-rounded" />
      <button type="button" className="btn btn-primary">UPDATE</button>
    </div>
  )
}
