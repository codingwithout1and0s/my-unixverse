import React from 'react'

import styles from './footer.module.css'

const FooterComp = () => {
  return (
    <div className={styles.root}>
      &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
      &amp;
      {` `}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </div>
  )
}

export default FooterComp
