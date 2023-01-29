import Handlebars from 'handlebars';
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
      const template = Handlebars.compile(HomedPageTemplate, this.props);
      return template({});
  }
}
