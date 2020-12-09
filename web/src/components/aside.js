import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../assets/sung-wang.jpg'

import './aside.css'

const AsidePanel = styled.div`
display: flex
content-self: center
content-items: center
text-align: center
width: 100px
height: 320px
font-size: 0.8em
border: 1px solid red
`

function Aside () {
  return (
    <AsidePanel>
      <p>Hi. I'm Tang</p>
      <img src={ProfilePicture} alt='Sung Wang' />
      <p>Aspiring Dev | Javascript Monkey</p>
      <p>It's never too late to turn a hobby into a career</p>
      <p>
        My-Unixverse is not a brand. There's no sales funnel. It's Just a portal of raw ideas and experiences shared with you through the interwebs.  I am simply human, full of ideas and faults. Most of the time you'll see my developer journey. Then there's those moments where I might share my dirty laundry.</p>
    </AsidePanel>
  )
}

export default Aside
