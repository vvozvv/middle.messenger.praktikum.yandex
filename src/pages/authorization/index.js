import Handlebars from "handlebars";
import {AuthorizationPageTemplate} from "./authorization.tmpl";

const Authorization = () => {
    const template = Handlebars.compile(AuthorizationPageTemplate);
    return template({});
}

export default Authorization;
