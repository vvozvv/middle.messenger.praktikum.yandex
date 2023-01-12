import Handlebars from "handlebars";
import {ChatPageTemplate} from "./chats.tmpl";
import './chat.style.scss';

const ChatsPage = () => {
    const template = Handlebars.compile(ChatPageTemplate);
    return template({});
}

export default ChatsPage;
