import Block from '../../core/block/Block';
import templateButton from './Button.tmpl';
import { compile } from 'handlebars';
import { ButtonTypes } from './Button.types';
import './Button.scss';
import Spinner from "components/Spinner/Spinner";

class Button extends Block {
    constructor(props: ButtonTypes) {
        super({
            ...props,
        });
    }

    protected render() {
        this.children.spinner = new Spinner();

        const template = compile(templateButton);
        return this.compile(template, this.props);
    }
}

export default Button;
