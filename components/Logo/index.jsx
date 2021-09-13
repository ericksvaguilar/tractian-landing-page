import Image from 'next/image'
import logo from '../../public/logo-tractian.svg'

export default function Logo({ width, height }) {
  return <Image src={logo} width={width} height={height} alt="Logo Tractian" />
}

Logo.defaultProps = {
  width: 170,
  height: 60,
}
