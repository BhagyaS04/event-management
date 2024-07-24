import React from 'react'
import './Home.css'
import UpcomingEvents from './UpcomingEvent'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
import 'reactjs-popup/dist/index.css';

const Home = () => {
  return (
    <motion.div 
    initial = {{width : 0}}
    animate = {{width : "100%"}}
    exit = {{x : window.innerWidth}}
    transition = {{duration : 0.5}}>
        <div>
          <Navbar/>
        </div>
      <div>
        <br />
        <img src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=828" alt="" />
        <h2><b>The people platform—Where interests become friendships</b></h2>
        <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Meetup. Events are happening every day—sign up to join the fun.</p>
      </div>
      <div>
        <UpcomingEvents/>
      </div>
    </motion.div>
  )
}

export default Home;
