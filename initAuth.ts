import { init } from 'next-firebase-auth'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


const initAuth = () => {
    init({
        authPageURL: '/auth',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        onLoginRequestError: (err) => {
            console.error(err)
        },
        onLogoutRequestError: (err) => {
            console.error(err)
        },
//        firebaseAuthEmulatorHost: 'localhost:9099',
        // firebaseAdminInitConfig: {
        //     credential: {
        //         projectId: 'my-example-app-id',
        //         clientEmail: 'example-abc123@my-example-app.iam.gserviceaccount.com',
        //         // The private key must not be accessible on the client side.
        //         //privateKey: process.env.FIREBASE_PRIVATE_KEY,
        //     },
        //     databaseURL: 'https://my-example-app.firebaseio.com',
        // },
        // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
        // useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            apiKey: "AIzaSyBAwXKZquhd71nRZa2hApIl0_gO9p89pp0",
            authDomain: "ensemble-with-me.firebaseapp.com",
            projectId: "ensemble-with-me",
            storageBucket: "ensemble-with-me.appspot.com",
            messagingSenderId: "3397834428",
            appId: "1:3397834428:web:d935b4897af12bf100a2b9",
            measurementId: "G-QDZXTJLBRS"
        },
        cookies: {
            name: 'Ensemble-with-me', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: false,
        },
        onVerifyTokenError: (err) => {
            console.error(err)
        },
        onTokenRefreshError: (err) => {
            console.error(err)
        },
    })
}

export default initAuth