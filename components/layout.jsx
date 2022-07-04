/* eslint-disable @next/next/next-script-for-ga */
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Navbar from './navbar'

export default function Layout(props) {
    const asPath = useRouter()
    const logo = "alice.png"
    return (
    <>
        <Head>
            <link rel="icon" type="image/png" href={logo} />
            <link rel="shorcut icon" href={logo} />
            <link rel="canonical" href={asPath.asPath} />

            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta charSet="utf-8" />
            <meta name="title" content={props.name} />
            <meta name="description" content="DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi" />
            <meta name="keywords" content="dbanime, DBA, databaseanime, anime database, database anime. animedatabase, dba" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="id" />
            <meta name="revisit-after" content="1 days" />
            <meta name="author" content={props.name} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />

            <meta name="og:locale" property="og:locale" content="id" />
            <meta name="og:title" property="og:title" content={props.name} />
            <meta name="og:description" property="og:description" content="DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi" />
            <meta name="og:site_name" property="og:site_name" content={props.name} />
            <meta name="og:type" property="og:type" content="website" />

            <meta name="apple-mobile-web-app-title" property="apple-mobile-web-app-title" content={props.name} />
            <meta name="mobile-web-app-capable" property="mobile-web-app-capable" content="yes" />
            <meta httpEquiv="content-language" content="id" />

            <title>{props.name+" | "+props.title}</title>
            
            <script dangerouslySetInnerHTML={{__html:`(function(w, d, s, l, i){w[l] = w[l] || [];w[l]push({'gtm.start': new Date().getTime(),event: 'gtm.js'});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src ='https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'GTM-5HX7DR9');`}}></script><script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-JDRSB3CDLH');`}}></script><script async src="https://www.googletagmanager.com/gtag/js?id=G-JDRSB3CDLH"></script>

        </Head>
        <noscript dangerouslySetInnerHTML={{__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HX7DR9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        {/* <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HX7DR9" height="0" width="0" className="hide"></iframe> */}
        <div className="w-full container">
            {props.children}
        <Navbar />
        </div>
    </>
    )
}