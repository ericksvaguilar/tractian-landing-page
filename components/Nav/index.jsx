import Navbar from '../Navbar'
import NavMobile from '../NavMobile'

import useWindowSize from '../../helper/useWindowSize'

import styles from './index.module.scss'

export default function Nav() {
  const size = useWindowSize()
  const isMobile = size.width < 900

  return (
    <nav className={styles.Nav}>{isMobile ? <NavMobile /> : <Navbar />}</nav>
  )
}
