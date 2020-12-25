import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import ProjectCard from '../components/projectCard/ProjectCard';
import { getProject, deleteProject, putProject } from './../redux/ProjectAction'

export default function Home() {
  const { projects } = useSelector(state => state.projectReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject());
  }, []);

  const editProject = (e, id, type) => {

    e.preventDefault();
    if (type === 'delete') {
      dispatch(deleteProject(id))
    }
    if (type === 'edit') {

    }
  }

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-sm-6">
          <h3 className="mb-1"><span className="text-secondary">Featured</span> <span className="text-dark">Developers</span></h3>
          <h5 className="text-secondary font-17">Prominent Developers in Bangalore</h5>
        </div>
        <div className="col-sm-6 text-sm-right">
          <Link className='btn bg-gradient text-white text-uppercase rounded-pill' to="/create">+ add new developer</Link>
        </div>
      </div>
      {/* projects grid start */}
      <div className="row">
        {projects.length > 0 && projects.map(project => (
          <ProjectCard
            editProject={editProject}
            key={project.id}
            project={project}
          />
        ))}
      </div>
      {/* projects grid start */}
      <div className="row my-5">
        <div className="col-sm-6">
          <h3 className="mb-1"><span className="text-secondary">Trending</span> <span className="text-dark">Projects</span></h3>
          <h5 className="text-secondary font-17">Most sought-after projects in Bangalore</h5>
        </div>
        <div className="col-sm-6 text-sm-right">
          <button className='btn bg-gradient text-white text-uppercase rounded-pill'>+ add new Project</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="..." className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
