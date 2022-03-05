import { withAuthUser, AuthAction } from 'next-firebase-auth'

const MyLoader = () => <div>Loading Like a Champion ...</div>

const AuthPage = () => <div>My Auth Page</div>

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    whenUnauthedAfterInit: AuthAction.RENDER,
    LoaderComponent: MyLoader,
})(AuthPage)