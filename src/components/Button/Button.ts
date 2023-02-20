import Block from '../../core/Block';
import templateButton from './Button.tmpl';
import { compile } from 'handlebars';
import { ButtonTypes } from './Button.types';
import './Button.scss';

export default class Button extends Block {
    constructor(props: ButtonTypes) {
        super({
            ...props,
            // events: {
            //     click: () => {
            //         console.log('this')
            //     }
            // }
        });
    }

    protected render() {
        const template = compile(templateButton);
        return this.compile(template, this.props);
    }
}
