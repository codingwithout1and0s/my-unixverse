import React from 'react'
import Header from './header'
import FooterComp from './footer'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
    </div>
    <FooterComp className={styles.footerWrapper} />
  </>
)

export default Layout
