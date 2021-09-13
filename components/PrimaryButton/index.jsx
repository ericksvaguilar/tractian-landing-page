import styles from './index.module.scss'

export default function PrimaryButton({ href, target, rel, children }) {
  return (
    <a className={styles.PrimaryButton} href={href} target={target} rel={rel}>
      {children}
    </a>
  )
}
