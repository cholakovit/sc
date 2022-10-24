import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Cube from '../Cube'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='scroll'>
            <p>
              At about 20 years old, I decided to work as a software developer professionaly. I started C++ courses and passed 
              the PU(Plovdiv University) exam with 5.40. But not long, I moved to Sofia and started working there first in a 
              company "Freido" with PHP, and then in "StangaOne", where we worked actively with Symfony Framework based on PHP 
              and additionally Doctrine & Propel ORM. Of course, we also actively used HTML, CSS, JS, etc. We also integrate 
              many and different payment methods and many other things. 
            </p>
            <p align="LEFT">
              I also worked in other companies and for several years I developed seriously, after which an American employer 
              contacted me and asked me to work on their application. This application was a website with job ads like our 
              jobs.bg and others, only for the US, and more precisely for the minorities there. After I pitched them a few 
              ideas and created the first version of the app, the client really liked me and directly made me a technical 
              manager, while they took over the sales part and I was assigned for the technical part of the business, in this 
              case the development of the app. There was also a need for additional staff, such as additional programmers, 
              designers and marketers. After we built the team for this application the business took off significantly as last 
              time before I left the monthly profit was around $100,000 per month. 
            </p>
            <p>
              While we were developing this application there were many additional projects and technical cases that I had to 
              solve. I had a case study where we have a DB with several million records and traffic between 15-20k visits per 
              day on a home page where we need to have a slider that takes results from the DB and displays them on the home 
              page with AJAX and it should load under 1 Sec. Only a good optimization of the DB query will not do, a non-standard 
              solution to the problem is required! I had another case where people from minorities in BG came to me and asked me 
              to run ads for them on FB (as FB blocks them constantly) and I had to bypass FB protections. As well as many, many 
              other projects and cases.
            </p>
            <p>
              In recent years, however, I've taken a much stronger interest in UI technologies, such as React. I have been 
              working with React for over 2 years now, as with some friends for their projects we had to develop an eCommerce 
              application with microservices, in this case we used Micro Frontends and Module Federation.
            </p>
            <p>After that I was involved in a team to develop electric car control software at Fermataenergy with React.</p>
            <p>I currently have no active projects and am actively looking for work.</p>
          </div>
        </div>

        <Cube />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
