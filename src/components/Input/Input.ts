import Block from '../../core/Block';
import { compile } from 'handlebars';
import { InputTmpl } from './Input.tmpl';
import { TInputProps } from 'components/Input/Input.types';
import './Input.scss';
import { validatorInstance } from '../../core/services/Validator/Validator';

export default class Input extends Block {
    static helper = 'Input';

    constructor(props: TInputProps) {
        super({
            ...props,
            touched: false,
            events: {
                focus: (e: FocusEvent) => {
                    this.changeInputValue(e?.target?.value ?? '')
                },
                input: (e: InputEvent) => {
                    this.changeInputValue(e?.target?.value ?? '')
                },
                blur: (e: FocusEvent) => {
                    this.changeInputValue(e?.target?.value ?? '')
                },
            }
        });
    }

    public changeInputValue(text): any {
        const el = document.querySelector(`[data-input-id="${this.id}"]`)!
        const inputError = document.querySelector(`[data-input-error-id="${this.id}"]`)! as any;

        const errorResult = validatorInstance.checkCorrect(text, this.props.validation);

        if (errorResult) {
            el.classList.add('input--error')
            inputError.style.display = 'block'
            inputError.innerHTML = errorResult
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
