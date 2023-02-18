import Link from "next/link"
import styles from '@/styles/header.module.scss'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className="header-logo">
            <h1>Logo</h1>
          </div>
          <ul className={styles.navbar}>
            <li>
                <Link href='/'>Inicio</Link>
            </li>
            <li>
                <Link href='/'>Blog</Link>
            </li>
            <li>
                <Link href='/'>About us</Link>
            </li>
            <li>
                <Link href='/'>contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header