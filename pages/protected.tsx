import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction
} from 'next-firebase-auth'

const ProtectedPage: NextPage = () => {
    const AuthUser = useAuthUser()
    return (
        <div className={styles.container}>
            <Head>
                <title>Protected Page Experiment</title>
                <meta name="description" content="Nothing to See Here - This Won't Have SEO" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <p>Your email is {AuthUser.email ? AuthUser.email : 'unknown'}.</p>
                </div>
            </main>

            <footer className={styles.footer}>
                &copy; 2022 Ensemble-with-me
            </footer>
        </div>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,})(ProtectedPage) //this is only called from the framework, that's why it says it's unused.
