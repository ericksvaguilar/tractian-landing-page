import { useState } from 'react'
import NavItems from '../NavItems'

import styles from './index.module.scss'

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className={styles.NavMobile}>
      <button onClick={toggleMenu}>menu</button>

      {isOpen && (
        <ul>
          <NavItems onClick={toggleMenu} />
        </ul>
      )}
    </div>
  )
}
