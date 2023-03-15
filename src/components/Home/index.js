import LogoTitle from '../../assets/images/logo-s.png'
import { Link, Routes, Route } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { Loader } from 'react-loaders'

const Home = () => {
  const [LetterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'a', 'n', 't', 'a', 'n', 'u']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={LetterClass}>H</span>
            <span className={`${LetterClass} _12`}>i,</span>
            <br />
            <span className={`${LetterClass} _13`}>I</span>
            <span className={`${LetterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={LetterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={LetterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Student / Fitness Enthusiast </h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
