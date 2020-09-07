import Link from 'next/link'
import styles from '../styles.module.css'

export default function Personagem({ personagem }) {
  return (
    <li className={styles.hello}>
      <Link href="/personagem/[id]" as={`/personagem/${personagem.id}`}>
        <a>{personagem.name}</a>
      </Link>
    </li>
  )
}
