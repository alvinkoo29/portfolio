import React, {useState} from 'react';
import ProjectContent from './ProjectContent';
import './ProjectButton.css';

function ProjectButton() {
  const [list,setList] = useState(false);

  const toggleList = () => setList(!list);

  return (
    <div className = "projects-container">
      {list? <ProjectContent/> : null}
      <button className = "projects-button" onClick={toggleList}>
        Projects
      </button>
    </div>
  );
}

export default ProjectButton;
