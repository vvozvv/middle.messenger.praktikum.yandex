import { compile } from 'handlebars';
import Block from '../../core/block/Block';
import { notFoundPageTemplate } from './404.tmpl';

/**
 * Главная "Страница не найдена"
 */
export default class Error404 extends Block {
    protected render(): any {
        const template = compile(notFoundPageTemplate);
        return this.compile(template, this.props);
    }
};
