import * as React from "react"
import { useRouter } from 'next/router'

import Link from "next/link"
import Head from "next/head"


import styles from "../styles/top.module.scss"

const Page = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    const router = useRouter()
    const { salary } = router.query
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://sarari.go5.run/"/>
                <title key="site:title">{appName} | {appDesc}</title>
            </Head>
            <main className={styles.main}>
                <p>Sarariは10ms給(0.01秒給)を割り出し、10ms秒毎に幸せになれるアプリです💸💚</p>
                <div className={styles.input_box}>
                    <p>あなたの月給</p>
                    <h2>{salary}</h2>
                </div>
            </main>
        </div>
    )
}


export default Page