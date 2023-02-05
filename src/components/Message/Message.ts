import Block from '../../core/Block';
import { compile } from 'handlebars';
import template from './Message.tmpl';
import './Message.scss';

type TMessageProps = {
    me: boolean;
    text: string;
    date: string;
}

export default class Message extends Block {
    static helper = 'Message';

    constructor(props: TMessageProps) {
        super(props);
    }

    protected render(): any {
        console.log(this.props);
        return this.compile(compile(template), this.props);
    }
}
