import Block from '../../core/Block';
import { compile } from 'handlebars';
import { InputTmpl } from './Input.tmpl';
import { TInputProps } from 'components/Input/Input.types';
import './Input.scss';

export default class Input extends Block {
    static helper = 'Input';

    constructor(props: TInputProps) {
        super({
            ...props,
            events: {
                focus: (e: FocusEvent) => {
                    e.preventDefault();
                },
                input: (e: InputEvent) => {
                    e.preventDefault();
                    this.changeInputValue(e?.target?.value ?? '')
                },
                blur: (e: FocusEvent) => {
                    e.preventDefault();
                },
            }
        });
    }

    public changeInputValue(text): any {
        const el = document.querySelector(`[data-input-id="${this.id}"]`)!
        const inputError = document.querySelector(`[data-input-error-id="${this.id}"]`)! as any

        if (text.length <= 3) {
            el.classList.add('input--error')
            inputError.style.display = 'block'
        } else {
            el.classList.remove('input--error')
            inputError.style.display = 'none'
        }
    }

    public render(): any {
        const template = compile(InputTmpl)
        return this.compile(template, {
            ...this.props,
            id: this.id
        });
    }
}
