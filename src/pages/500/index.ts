import { compile } from 'handlebars';
import Block from '../../core/block/Block';
import { notFoundPageTemplate } from './500.tmpl';

/**
 * Главная "Ошибка сервера"
 */
export default class Error500 extends Block {
    render() {
        const template = compile(notFoundPageTemplate);
        return this.compile(template, this.props);
    }
};
