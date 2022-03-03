import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Registration: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Register for an account</title>
                <meta name="description" content="Register to fnd others to ensemble with." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    This app serves a single purpose: make it easy for people to find others to <a href="https://en.wikipedia.org/wiki/Mob_programming">ensemble</a> program with.
                </h1>

                <p className={styles.description}>
                    Get started by <a href="http://somewhere.com/">registering</a>.

                </p>
            </main>

            <footer className={styles.footer}>
                &copy; 2022 Ensemble-with-me
            </footer>
        </div>
    )
}

export default Registration