import * as React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    const name = process.env.serviceName
    const nameplain = process.env.serviceNamePlain
    const domain = process.env.serviceDomain
    const description = process.env.serviceDescription
    const icon = process.env.serviceIcon
    return (
      <Html lang="ja">
        <Head>
        <link rel="alternate" hrefLang="ja" href={"https://" + domain + "/"}/>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description}/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="format-detection" content="telephone=no"/>

        <link rel="icon" href={icon} />

        <meta property="og:title" content={name}/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://" + domain + "/"}/>
        <meta property="og:site_name" content={name}/>
        <meta property="og:image" content={"https://" + domain + "/img/ogp.png"}/>
        <meta property="og:description" content={description}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@Ninomiyarun"/>
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
