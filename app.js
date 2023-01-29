import HomePage from './src/pages/home/index';
import Error404 from './src/pages/404/index';
import Authorization from './src/pages/authorization';
import Registration from './src/pages/registration';
import ProfilePage from './src/pages/profile';
import Error500 from './src/pages/500/index';
import ChatsPage from './src/pages/chats/index';

const getPageFromUrl = () => window.location.pathname.split('/')[1];

const app = document.getElementById('root');

const getContentPage = (url) => {
  switch (url) {
    case '':
      return new HomePage().render();
    case 'single-chat':
      return new ChatsPage().render();
    case 'authorization':
      return new Authorization().render();
    case 'registration':
      return new Registration().render();
    case 'chat':
      return new ChatsPage().render();
    case 'profile':
      return new ProfilePage().render();
    case '404':
      return new Error404().render();
    case '500':
      return new Error500().render();
    default:
      return new Error404().render();
  }
};

const renderPage = () => {
  const url = getPageFromUrl();
  app.innerHTML = getContentPage(url);
};

renderPage();

window.addEventListener('hashchange', renderPage);
