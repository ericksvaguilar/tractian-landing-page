import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function Header({ children }) {
  return <header className={styles.Header}>{children}</header>
}

Header.propTypes = {
  children: PropTypes.element,
}
