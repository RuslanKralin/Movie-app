import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export default function NavBar() {
  return (
    <aside className={styles.wrapper}>
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={179} height={36} />
        </Link>
      </div>
      <div className={styles.link_group}>
        <Link href="/movies" className={styles.link}>
          Movies
        </Link>
        <Link href="/" className={styles.link}>
          Rated movies
        </Link>
      </div>
    </aside>
  )
}
