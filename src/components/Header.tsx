import * as React from "react"
import Link from 'next/link'

import styles from "../styles/components/Header.module.scss"


const Header = () => {
    const appName = process.env.serviceName
    return (
    <div>
    <header className={styles.header}>
      <Link href="/">
      <a className={styles.logo}>{appName}</a>
      </Link>
    </header>
    </div>
  )
}
export default Header