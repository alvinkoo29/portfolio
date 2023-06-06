import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectContent.css';

function ProjectContent() {
  return (
    <div className = "projects-list">
      <Link to = '/' className = "projects-links">
        Introduction
      </Link>
      <Link to = '/youtube-clone/home' className = "projects-links">
        Youtube mockup
      </Link>
      <Link to = '/travel-agency/home' className = "projects-links">
        Travel agency
      </Link>
    </div>
  );
}

export default ProjectContent;
