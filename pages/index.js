import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { main } from '../utils/mongodb'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.status} style={{backgroundColor: props.isConnected==="Connected" ? "green" : "red"}}>{props.isConnected}</p>
      <Link href="/movies">Movies</Link>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { isConnected } = await main()
  return {
    props: {
      isConnected
    }
  }
}