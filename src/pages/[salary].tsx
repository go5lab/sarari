import * as React from "react"
import { useRouter } from 'next/router'
import type { GetStaticProps, NextPage } from 'next'

import Link from "next/link"
import Head from "next/head"


import styles from "../styles/top.module.scss"

function getMonthRemaining() {
    const date = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000))
    const now_year = date.getFullYear()
    const now_month = date.getMonth()+1
    const now_day = date.getDate()
    const now_hour = date.getHours()
    const now_minutes = date.getMinutes()
    const now_second = date.getSeconds()
    const now_ms = date.getMilliseconds()
    const from = new Date(`${now_year}/${now_month}/1/0:0:0:0`)
    const to = new Date(`${now_year}/${now_month}/${now_day}/${now_hour}:${now_minutes}:${now_second}:${now_ms}`)
    const ms = to.getTime() - from.getTime()
    const remaining = Math.floor(ms / (1000*60*60*24))
    return String(ms)
}

const Page: NextPage = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    const router = useRouter()
    const { salary } = router.query
    const progress_month = getMonthRemaining()
    const sec_salary = (Number(salary) / 2592000)

    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://sarari.go5.run/"/>
                <title key="site:title">{appName} | あなたの10ms給</title>
            </Head>
            <main className={styles.main}>
                <p>Sarariは10ms給(0.01秒給)を割り出し、10ms秒毎に幸せになれるアプリです💸💚</p>
                <div className={styles.input_box}>
                    <p>あなたの月給</p>
                    <h2>{salary}</h2>
                    <p>あなたの秒給</p>
                    <h2>{sec_salary}</h2>
                    <p>今月の経過時間:{progress_month}</p>
                </div>
            </main>
        </div>
    )
}


export default Page