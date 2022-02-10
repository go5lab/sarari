import * as React from "react"

import Link from "next/link"
import Head from "next/head"


import styles from "../styles/top.module.scss"

const Page = () => {
    const [monthlySalary, setMonthlySalary] = React.useState("0")
    const [errorMessage, setErrorMessage] = React.useState<String>(null)

    const handleClick = () =>  {
        if (monthlySalary == "") {
            setErrorMessage("値がありません")
        }
        window.location.assign(`/${monthlySalary}`)
    }
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
                    <div className={styles.input_wrap}>
                    <h2>あなたの月給を入力</h2>
                    <p>半角数字で入力してください</p>
                        <input
                         value={monthlySalary} 
                         onKeyPress={(event) => {
                             if (!/[0-9]/.test(event.key)) {
                                 event.preventDefault();
                                }
                            }
                        }
                        onChange={(e) => setMonthlySalary(e.target.value)} />
                        <button onClick={handleClick}>Go</button>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Page