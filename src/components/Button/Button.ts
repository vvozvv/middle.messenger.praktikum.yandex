import Block from '../../core/block/Block';
import templateButton from './Button.tmpl';
import { compile } from 'handlebars';
import { ButtonTypes } from './Button.types';
import './Button.scss';

class Button extends Block {
    constructor(props: ButtonTypes) {
        super({
            ...props,
        });
    }

    protected render() {
        const template = compile(templateButton);
        return this.compile(template, this.props);
    }
}

export default Button;
