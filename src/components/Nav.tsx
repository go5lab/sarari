import * as React from "react"
import Link from 'next/link'

import styles from "../styles/components/Nav.module.scss"


const Nav = () => {
    return (
    <div>
    <nav className={styles.nav}>
        <ul className={styles.ul}>
            <Link href="/"><a><li>About</li></a></Link>
            <Link href="/note"><a><li>Notes</li></a></Link>
            <Link href="/product"><a><li>Products</li></a></Link>
            <Link href="/gallery"><a><li>Gallery</li></a></Link>
            <Link href="/catalunya"><a><li>Catalunya</li></a></Link>
        </ul>
    </nav>
    </div>
  )
}
export default Nav