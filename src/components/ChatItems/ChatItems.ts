import Handlebars from 'handlebars';
import Block from '../../core/block';
import template from './ChatItems.tmpl';

export default class ChatItems extends Block {
    // static helper = 'Message';

    protected render(): DocumentFragment {
        return this.compile(Handlebars.compile(template), this.props);
    }
}
