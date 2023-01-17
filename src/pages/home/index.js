import Handlebars from "handlebars";
import {HomedPageTemplate} from "./home.tmpl";
import './home.style.scss';

/**
 * Главная страница
 */
const Page = () => {
    const template = Handlebars.compile(HomedPageTemplate);
    return template({});
}

export default Page;
