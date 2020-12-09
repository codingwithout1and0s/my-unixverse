import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../assets/sung-wang.jpg'

const AsidePanel = styled.div`
width: 100px
height: 320px
outline: 1px solid green
`

const ProfileIMG = styled.img`
max-width: 100%
height: 200px
border: 1px solid #ddd
border-radius: 4px
padding: 5px
`

function Aside () {
  return (
    <AsidePanel>
      <p>Hi. I'm Tang</p>
      <ProfileIMG src={ProfilePicture} alt='Sung Wang' />
    </AsidePanel>
  )
}

export default Aside
