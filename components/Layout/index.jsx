import PropTypes from 'prop-types'
import Header from '../Header'
import Logo from '../Logo'
import styles from './index.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Header>
        <Logo />
      </Header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}
