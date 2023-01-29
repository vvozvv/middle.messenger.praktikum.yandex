import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { notFoundPageTemplate } from './404.tmpl';

/**
 * Главная "Страница не найдена"
 */
export default class Error404 extends Block {
    protected render(): any {
        const template = Handlebars.compile(notFoundPageTemplate);
        return template({});
    }
};
