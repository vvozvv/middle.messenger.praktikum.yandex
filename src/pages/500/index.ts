import Handlebars from 'handlebars';
import Block from '../../core/Block';
import { notFoundPageTemplate } from './500.tmpl';

/**
 * Главная "Ошибка сервера"
 */
export default class Error500 extends Block {
    render() {
        const template = Handlebars.compile(notFoundPageTemplate);
        return template({});
    }
};
