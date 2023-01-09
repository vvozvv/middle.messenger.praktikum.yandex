import Page from "./src/pages/home";
import ChatsPage from "./src/pages/chats";
import Error404 from './src/pages/404';

const getPageFromUrl = () => window.location.pathname.split('/')[1];

const app = document.getElementById('root');

const getContentPage = (url) => {
    switch (url) {
        case 'main-page':
            return Page()
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