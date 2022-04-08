import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {MatchRequest} from "../components/user/preferences/MatchRequest";

const languages: string[] = ['Java', 'Rust'];
const onMatchRequestSaved: (data: any) => void = (data: any) => {
    alert('You chose ' + JSON.stringify(data) + '!');
};

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ensemble with me</title>
                <meta name="description" content="Make it easy people to find others to ensemble with."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    This app serves a single purpose: make it easy for people to find others to <a
                    href="https://en.wikipedia.org/wiki/Mob_programming">ensemble</a> program with.
                </h1>

                <MatchRequest languages={languages} onSaved={onMatchRequestSaved}/>
            </main>

            <footer className={styles.footer}>
                &copy; 2022 Ensemble-with-me
            </footer>
        </div>
    )
}

export default Home
