import { compile } from 'handlebars';
import Block from '../../core/block';
import template from './ChatItems.tmpl';
import './ChatItems.styles.scss';

export default class ChatItems extends Block {
    static helper = 'ChatItems';

    protected render(): DocumentFragment {
        return this.compile(compile(template), this.props);
    }
}
