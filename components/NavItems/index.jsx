import PrimaryButton from '../PrimaryButton'
import NavLink from '../NavLink'

export default function NavItems({ onClick }) {
  return (
    <>
      <li>
        <NavLink href="/" name="Home" onClick={onClick} />
      </li>
      <li>
        <NavLink href="/sobre" name="Sobre" onClick={onClick} />
      </li>
      <li>
        <PrimaryButton
          href="https://tractian.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conheça
        </PrimaryButton>
      </li>
    </>
  )
}
