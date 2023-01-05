import Page from "./pages/home";
import ChatsPage from "./pages/chats";
const app = document.getElementById('root');
const getPage = () => window.location.pathname.split('/')[1];

window.addEventListener('hashchange', () => {
    renderPage(getPage())
});

const renderPage = (url) => {
    switch (url) {
        case 'main-page':
            app.append(Page())
            break
        default:
            app.append(ChatsPage)
    }
}

renderPage(getPage())