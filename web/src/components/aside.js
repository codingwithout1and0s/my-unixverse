import React from 'react'

import ProfilePicture from '../assets/sung-wang.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/fontawesome-free'

import styles from './aside.module.css'

function Aside () {
  return (
    <div className={styles.root}>
      <p>Hi. I'm Tang</p>
      <img id={styles.ProfilePicture} src={ProfilePicture} alt='Sung Wang' />
      <FontAwesomeIcon icon={faGithub} size='1x' />
      <p>Aspiring Dev | Javascript Monkey</p>
      <p>It's never too late to turn a hobby into a career</p>
      <p>
        My-Unixverse is not a brand. There's no sales funnel. It's Just a portal of raw ideas and experiences shared with you through the interwebs.  I am simply human, full of ideas and faults. Most of the time you'll see my developer journey. Then there's those moments where I might share my dirty laundry.</p>
    </div>
  )
}

export default Aside
