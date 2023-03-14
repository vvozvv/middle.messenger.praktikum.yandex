import HomePage from './pages/home';
import Error404 from './pages/404';
import Authorization from './pages/authorization';
import Error500 from './pages/500';
import ChatsPage from './pages/chats';
import Registration from './pages/registration';
import {AllowedWithoutToken, PAGE} from 'modules/router';
import {
    ProfileEditPasswordEditPage,
    ProfileEditPage,
    ProfilePage
} from './pages/profile';
import router from './core/router/Router';
import AuthController from "./api/auth/auth-controller";
import store from './store/Store';
import '../style.scss';

const getPageFromUrl = () => window.location.pathname.split('/')[1];

router
    .use(PAGE.MAIN, HomePage)
    .use(PAGE.REGISTRATION, Registration)
    .use(PAGE.LOGIN, Authorization)
    .use(PAGE.CHATS, ChatsPage)
    .use(PAGE.PROFILE, ProfilePage)
    .use(PAGE.PROFILE_EDIT, ProfileEditPage)
    .use(PAGE.PROFILE_PASSWORD_EDIT, ProfileEditPasswordEditPage)
    .use(PAGE.NOT_FOUND, Error404)
    .use(PAGE.ERROR, Error500)
    .start();

AuthController.getUser().then((res) => {
    const {status, response} = res;

    if (status === 200 || status === 400) {
        router.go(getPageFromUrl());
        store.set('currentUser', JSON.parse(response))
    } else if (AllowedWithoutToken.includes(getPageFromUrl())) {
        router.go(getPageFromUrl());
    } else {
        router.go(PAGE.LOGIN)
    }
}).finally(() => store.set('isLoadingUser', false))



