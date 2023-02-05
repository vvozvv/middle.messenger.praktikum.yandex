import { compile } from 'handlebars';
import { HomedPageTemplate } from './home.tmpl';
import './home.style.scss';
import Block from '../../core/Block';

/**
 * Главная страница
 */
export default class HomePage extends Block {
    constructor() {
        super();
    }
    render() {
        const template = compile(HomedPageTemplate, this.props);
        return this.compile(template, this.props);
    }
}
