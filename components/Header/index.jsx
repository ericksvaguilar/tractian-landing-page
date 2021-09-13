import styles from './index.module.scss'

export default function Header({ children }) {
  return <header className={styles.Header}>{children}</header>
}
