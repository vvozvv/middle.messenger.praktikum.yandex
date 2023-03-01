import HomePage from './src/pages/home/index';
import Error404 from './src/pages/404/index';
import Authorization from './src/pages/authorization';
import Error500 from './src/pages/500/index';
import ChatsPage from './src/pages/chats/index';
import Registration from './src/pages/registration';
import registerComponent from './src/utils/helpers/hb';
import ChatItems from './src/components/ChatItems/ChatItems';
import Message from './src/components/Message/Message';
import {AllowedWithoutToken, PAGE} from './src/modules/router';
import {
    ProfileEditPasswordEditPage,
    ProfileEditPage,
    ProfilePage
} from './src/pages/profile';
import router from './src/core/router/Router';
import AuthController from "./src/api/auth/auth-controller";
import store from './src/store/Store';

registerComponent(ChatItems);
registerComponent(Message);

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
})



