import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJs,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [LetterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  let text = 'About me'
  let aboutArray = text.split('')
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={LetterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Well, we can start off with my name, Shantanu. I am an Electronics
            and Communication Engineer student in NITTE, Bangalore.
          </p>
          <p>
            I love getting involved in the software industry, especially Web
            Development, as there's some magic to dynamic web pages which i cant
            ignore.Learning new things has always been my motto and to satisfy
            my hunger to learn new technologies, i chose the path to be a
            skillful web developer. An absolute foodie and a sports lover.
            Especially Cricket and Lawn Tennis. I absolutely love being
            ultra-competitive when it comes to a game of cricket.
          </p>
          <p>
            I also tend to obsess over orchestras, live musical performances and
            music in general. Apaprt from that, I recently have gotten an
            obsession over the game of chess and I find it pretty fascinating
            when i look back at the games and see how my human brain complicates
            simple positions by over-analysing the position. Oh! and also, I
            love photography and i'd like to start my own blog page one day
            where i upload photos that pique my curiosity about this world.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
