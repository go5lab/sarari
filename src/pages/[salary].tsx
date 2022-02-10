import * as React from "react"
import { useRouter } from 'next/router'
import type { GetStaticProps, NextPage } from 'next'

import Link from "next/link"
import Head from "next/head"


import styles from "../styles/salary.module.scss"
import { useEffect, useState } from "react"
import { useAnimationFrame } from "../hooks/animationFrame"


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
    return String(2624671916 - ms)
}

function getMonthSudeni() {
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
    return String(ms)
}

const Page: NextPage = () => {
    const router = useRouter()
    const { salary } = router.query
    const progress_month = getMonthRemaining()
    const sec_salary = (Number(salary) / 2592000)
    const ms_salary = (Number(salary) / 2624671916)
    const ms_sudeni = (ms_salary * Number(getMonthSudeni()))
    const appName = process.env.serviceName
    const appDesc = process.env.serviceDescription


    const [sudeni, setSudeni] = useState(0);
    useAnimationFrame(() => {
        setSudeni(ms_sudeni)
    });
    return (
        <div>
            <Head>
                <link rel="canonical" href={"https://sarari.go5.run/" + salary}/>
        <meta name="robots" content="noindex, follow" />
                <title key="site:title">あなたの10ms給 | {appName}</title>
            </Head>
            <main className={styles.main}>
                <p>Sarariは10ms給(0.01秒給)を割り出し、10ms秒毎に幸せになれるアプリです💸💚</p>
                <div className={styles.input_box}>
                <div className={styles.input_wrap}>
                    <p>あなたの月給</p>
                    <h2>{salary}円</h2>
                    <p>あなたの10ms給</p>
                    <h2>{ms_salary * 10}円</h2>
                    <p>すでに獲得した給料</p>
                    <h2>{sudeni}円</h2>
                    <p>今月の残り時間</p>
                    <h2>{progress_month}ms</h2>
                </div>
                </div>
            </main>
        </div>
    )
}


export default Page