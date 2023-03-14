import Block from 'core/block/Block';
import { compile } from 'handlebars';
import { InputTmpl } from './Input.tmpl';
import { TInputProps } from 'components/Input/Input.types';
import { validatorInstance } from 'core/services/Validator/Validator';
import './Input.scss';

export default class Input extends Block {
    static helper = 'Input';

    constructor(props: TInputProps) {
        super({
            touched: false,
            showErrorMessage: true,
            events: {
                focus: (e: FocusEvent) => this.changeInputValue(e),
                input: (e: InputEvent) => this.changeInputValue(e),
                blur: (e: FocusEvent) => this.changeInputValue(e),
                ...props.events,
            },
            ...props,
        });
    }

    public changeInputValue(e: Event): void {
        const text = (e.target as HTMLTextAreaElement).value ?? '';
        const el = document.querySelector(`[data-input-id="${this.id}"]`)!
        const inputError = document.querySelector(`[data-input-error-id="${this.id}"]`)! as HTMLElement;

        const errorResult = validatorInstance.checkCorrect(text, this.props.validation);

        if (errorResult) {
            el.classList.add('input--error');

            if (inputError) {
              inputError.style.display = 'block';
              inputError.innerHTML = errorResult;
            }
        } else {
            el.classList.remove('input--error');

            if (inputError) {
              inputError.style.display = 'none';
            }
        }
    }

    public render() {
        const template = compile(InputTmpl)
        return this.compile(template, {
            ...this.props,
            id: this.id
        });
    }
}
