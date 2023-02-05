import HomePage from './src/pages/home/index';
import Error404 from './src/pages/404/index';
import Authorization from './src/pages/authorization';
import ProfilePage from './src/pages/profile/index';
import Error500 from './src/pages/500/index';
import ChatsPage from './src/pages/chats/index';
import Registration from './src/pages/registration';
import registerComponent from './src/utils/hb';
import ChatItems from './src/components/ChatItems/ChatItems';
import Message from './src/components/Message/Message';
import ProfileEditPage from './src/pages/profile/edit/profile.edit';
import { PAGE } from './src/modules/router';

registerComponent(ChatItems);
registerComponent(Message);

const getPageFromUrl = () => window.location.pathname.split('/')[1];

const app = document.getElementById('root');

const getContentPage = (url) => {
  switch (url) {
    case PAGE.MAIN:
      return new HomePage();
    case PAGE.LOGIN:
      return new Authorization();
    case PAGE.REGISTRATION:
      return new Registration();
    case PAGE.CHATS:
      return new ChatsPage();
    case PAGE.PROFILE:
      return new ProfilePage();
    case PAGE.PROFILE_EDIT:
      return new ProfileEditPage();
    case PAGE.NOT_FOUND:
      return new Error404();
    case PAGE.ERROR:
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
