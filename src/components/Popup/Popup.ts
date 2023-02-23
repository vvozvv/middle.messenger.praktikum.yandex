import Block from "../../core/Block";
import {compile} from "handlebars";
import PopupTemplate from './Popup.tmpl';
import './Popup.styles.scss';
import CloseIcon from '../../assets/image/icon/close.svg'

export class Popup extends Block {
    constructor(props: any) {
        super({
            ...props,
            active: false,
            events: {
                mouseup: (event: MouseEvent) => this.closePopup(event),
            }
        });
    }

    toggleClass() {
        this.setProps({ ...this.props, active: !this.props.active})
    }

    private closePopup(event: MouseEvent) {
        const classCloseList = ['popup', 'popup__close', 'popup__close-image'];
        const classList = (event?.target as Element)?.className.split(' ');

        if (classCloseList.includes(classList[0])) {
            this.toggleClass()
        }
    }

    protected getTemplate(template: any) {
        return `
            <div>
                <div class="popup {{#if active}}popup--active{{/if}}">
                    <div class="popup__content">
                        <div class="popup__close">
                            <img src="${CloseIcon}" alt="Закрыть" width="20" height="20" class="popup__close-image" />
                        </div>
                        ${template}
                    </div>
                </div>
            </div>
        `
    }

    protected render() {
        const template = compile(this.getTemplate(PopupTemplate));
        return this.compile(template, this.props);
    }
}