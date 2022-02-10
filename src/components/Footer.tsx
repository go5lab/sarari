import * as React from "react"
import Link from 'next/link'
import { CSSProperties, FunctionComponent } from 'react'


import styles from "../styles/components/Footer.module.scss"


const Footer: FunctionComponent = () => {
    return (
    <div>
    <footer className={styles.footer}>
        <div>
            <small>© 2022 Go5 Lab.</small>
        </div>
        <div>
        </div>
    </footer>
    </div>
  )
}
export default Footer