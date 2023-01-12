import Page from "./src/pages/home";
import ChatsPage from "./src/pages/chats";
import Error404 from './src/pages/404';
import Authorization from "./src/pages/authorization";
import Registration from "./src/pages/registration";

const getPageFromUrl = () => window.location.pathname.split('/')[1];

const app = document.getElementById('root');

const getContentPage = (url) => {
    console.log(url)
    switch (url) {
        case 'main-page':
            return Page();
        case 'single-chat':
            return ChatsPage();
        case 'authorization':
            return Authorization();
        case 'registration':
            return Registration();
        case 'chat':
            return ChatsPage();
        default:
            console.log('this')
            return Error404();
    }
}

const renderPage = () => {
    const url = getPageFromUrl();
    app.innerHTML = getContentPage(url);
}

renderPage()

window.addEventListener('hashchange', renderPage);
