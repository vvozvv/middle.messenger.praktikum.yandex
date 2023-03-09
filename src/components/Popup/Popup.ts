import {compile} from "handlebars";
import Block from "core/block/Block";
import PopupTemplate from './Popup.tmpl';
import CloseIcon from 'assets/image/icon/close.svg'
import {Icon} from "components/Icon";
import './Popup.styles.scss';

class Popup extends Block {
    constructor(props: any) {
        super({
            ...props,
            activePopup: false,
            events: {
                mouseup: (event: MouseEvent) => this.closePopup(event),
            }
        });

        this.children.closeIcon = new Icon({
          id: CloseIcon.id,
          width: 20,
          height: 20,
        });
    }

    toggleClass() {
        this.setProps({ ...this.props, activePopup: !this.props.activePopup})
    }

    private closePopup(event: MouseEvent) {
        const classCloseList = ['popup', 'popup__close', 'popup__close-image'];
        const classList = (event?.target as Element)?.className?.split(' ');

        if (classCloseList.includes(classList[0])) {
            this.toggleClass()
        }
    }

    protected getTemplate(template: any) {
        return `
            <div class="popup {{#if activePopup}}popup--active{{/if}}">
                <div class="popup__content">
                    <div class="popup__close">
                        {{{closeIcon}}}
                    </div>
                    ${template}
                </div>
            </div>
        `
    }

    protected render() {
        const template = compile(this.getTemplate(PopupTemplate));
        return this.compile(template, this.props);
    }
}

export default Popup;
