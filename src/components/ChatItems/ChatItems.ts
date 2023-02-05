import { compile } from 'handlebars';
import Block from '../../core/block';
import template from './ChatItems.tmpl';
import './ChatItems.styles.scss';
import { ChatItemsTypes } from 'components/ChatItems/ChatItems.types';

export default class ChatItems extends Block {
    static helper = 'ChatItems';

    constructor(props: ChatItemsTypes) {
        super(props);
    }

    protected render(): DocumentFragment {
        return this.compile(compile(template), this.props);
    }
}
