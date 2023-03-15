import React from 'react'
import './index.scss'

const ProjectDetails = (Props) => {
  return (
    <div className="project-details">
      <a className={Props.className} href={Props.target} alt={Props.alt}>
        <h2>{Props.name}</h2>
      </a>
      <h3 className="project-description">{Props.description}</h3>
    </div>
  )
}

export default ProjectDetails
