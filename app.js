import HomePage from './src/pages/home/index';
import Error404 from './src/pages/404/index';
import Authorization from './src/pages/authorization';
import ProfilePage from './src/pages/profile';
import Error500 from './src/pages/500/index';
import ChatsPage from './src/pages/chats/index';
import Registration from './src/pages/registration';
import registerComponent from './src/utils/hb';
import ChatItems from './src/components/ChatItems/ChatItems';
import Message from './src/components/Message/Message';

registerComponent(ChatItems);
registerComponent(Message);

const getPageFromUrl = () => window.location.pathname.split('/')[1];

const app = document.getElementById('root');

const getContentPage = (url) => {
  switch (url) {
    case '':
      return new HomePage();
    case 'single-chat':
      return new ChatsPage();
    case 'authorization':
      return new Authorization();
    case 'registration':
      return new Registration();
    case 'chat':
      return new ChatsPage();
    case 'profile':
      return new ProfilePage();
    case '404':
      return new Error404();
    case '500':
      return new Error500();
    default:
      return new Error404();
  }
};

const renderPage = () => {
  const url = getPageFromUrl();
  app.append(getContentPage(url).getContent());
};

renderPage();

window.addEventListener('hashchange', renderPage);
