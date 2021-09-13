import Link from 'next/link'

import styles from './index.module.scss'

export default function NavLink({ href, name, onClick }) {
  return (
    <Link href={href}>
      <a className={styles.NavLink} onClick={onClick}>
        {name}
      </a>
    </Link>
  )
}
