import Header from '../Header'
import styles from './index.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.Layout}>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
