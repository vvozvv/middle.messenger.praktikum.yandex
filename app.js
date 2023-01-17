import Page from "./src/pages/home";
import ChatsPage from "./src/pages/chats";
import Error404 from './src/pages/404';
import Authorization from "./src/pages/authorization";
import Registration from "./src/pages/registration";
import ProfilePage from "./src/pages/profile";
import Error500 from "./src/pages/500";

const getPageFromUrl = () => window.location.pathname.split('/')[1];

const app = document.getElementById('root');

const getContentPage = (url) => {
    switch (url) {
        case '':
            return Page();
        case 'single-chat':
            return ChatsPage();
        case 'authorization':
            return Authorization();
        case 'registration':
            return Registration();
        case 'chat':
            return ChatsPage();
        case 'profile':
            return ProfilePage();
        case '404':
            return Error404();
        case '500':
            return Error500();
        default:
            return Error404();
    }
}

const renderPage = () => {
    const url = getPageFromUrl();
    app.innerHTML = getContentPage(url);
}

renderPage()

window.addEventListener('hashchange', renderPage);
