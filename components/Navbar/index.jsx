import NavItems from '../NavItems'

import styles from './index.module.scss'

export default function Navbar() {
  return (
    <ul className={styles.Navbar}>
      <NavItems />
    </ul>
  )
}
