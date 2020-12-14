import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.div`
text-align: center;
background-color: rgba(20, 20, 20, 0.1);
color: #000;
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
