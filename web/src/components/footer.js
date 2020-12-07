import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.div`
background: #000;
color: #fff;
`

const FooterComp = () => {
  return (
    <FooterBar>
      &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
      &amp;
      {` `}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </FooterBar>
  )
}

export default FooterComp
