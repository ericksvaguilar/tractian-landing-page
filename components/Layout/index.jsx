import Header from '../Header'
import Logo from '../Logo'
import Nav from '../Nav'

import styles from './index.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Header>
        <Logo />
        <Nav />
      </Header>
      <main>{children}</main>
    </div>
  )
}
