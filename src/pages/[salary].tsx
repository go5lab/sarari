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
    const [salary, setSalary] = useState<String>()

    const [sudeni, setSudeni] = useState(0);
    const [msSalary, setMsSalary] = useState(0)
    const [msSudeni, setMsSudeni] = useState(0)
    const [progressMonth, setProgressMonth] = useState("")

    const appName = process.env.serviceName

    useEffect(() => {
        if (router.asPath !== router.route) {
            setSalary(String(router.query.salary))
        }
    }, [router])

    useEffect(() => {
        setProgressMonth(getMonthRemaining())
        setMsSalary(Number(salary) / 2624671916)
        setMsSudeni(msSalary * Number(getMonthSudeni()))
    }, [salary])

    useAnimationFrame(() => {
        setSudeni(msSudeni)
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
                    <h2>¥{salary}</h2>
                    <p>あなたの10ms給</p>
                    <h2>¥{msSalary * 10}</h2>
                    <p>すでに獲得した給料</p>
                    <h2>¥{sudeni}</h2>
                    <p>今月の残り時間</p>
                    <h2>{progressMonth}ms</h2>
                </div>
                </div>
            </main>
        </div>
    )
}


export default Page