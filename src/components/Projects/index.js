import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import ProjectDetails from './ProjectDetails'
import project from '../../project'
import Loader from 'react-loaders'

const Project = () => {
  let [letterClass, setLetterClass] = useState('text-animate')
  let projectArray = 'My Projects'.split('')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  function createCard(project) {
    return (
      <ProjectDetails
        id={project.id}
        key={project.id}
        name={project.name}
        target={project.target}
        alt={project.alt}
        description={project.description}
        className={project.name}
      />
    )
  }

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <br></br>
          <br></br>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectArray}
              idx={15}
            />
          </h1>
          <span className="tags top-project-tags">&lt;ul&gt;</span>
          <div className="project-section">{project.map(createCard)}</div>
          <span className="tags bottom-project-tags">&lt;/ul&gt;</span>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Project

// <div className="project-section">
// {/* <--project section 1 --> */}
// <div className="project-details">
//   <img
//     src={project1Image}
//     alt="one"
//     target="https://tindog-shantanu.pages.dev/"
//   />
//   <h1 className="projectName">Tindog</h1>
//   <p className="projectDescription">Lorermjsjns</p>
// </div>
// {/* <--project section 2 --> */}
// <div className="project-details">
//   <img
//     src={project1Image}
//     alt="one"
//     target="https://tindog-shantanu.pages.dev/"
//   />
//   <h1 className="projectName">Tindog</h1>
//   <p className="projectDescription">Lorermjsjns</p>
// </div>
// </div>
