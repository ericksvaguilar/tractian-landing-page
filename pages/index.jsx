import styles from '../styles/Home.module.scss'
import PrimaryButton from '../components/PrimaryButton'

export default function Home() {
  return (
    <div className={styles.Home}>
      <section className={styles.textSection}>
        <h1>Gerencie suas máquinas</h1>
        <p>
          Através da nossa plataforma você tem controle total de seus
          equipamentos, podendo acompanhar rotinas de manutenção, insights
          automáticos, status completo e mais.
        </p>
        <PrimaryButton
          href="https://tractian.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça
        </PrimaryButton>
      </section>
    </div>
  )
}
