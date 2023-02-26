import Popup from "../Popup";
import {compile} from "handlebars";
import PopupTemplate from "../PupupUploadImage/PupupUploadImage.tmpl";
import UserController from "../../../api/user/user-controller";
import store from "../../../store/Store";
import './PopupUploadImage.styles.scss'
import {InputUploader} from "../../Input";

/**
 * Модальное окно "Загрузить аватар"
 */
class PopupUploadImage extends Popup {
    constructor(props: any) {
        super(props);
        // @ts-ignore
        this.events?.['submit'] = async (e: any) => {
            e.preventDefault();

            const form = new FormData(e.target);

            try {
                const data = await UserController.updateAvatar(form);
                const { response } = data as any;
                store.set('currentUser', JSON.parse(response))
                this.toggleClass();
            } catch (e) {
                alert('Ошибка загрузки')
            }
        }
    }

    protected render() {
        this.children.input = new InputUploader({
            name: 'avatar',
            label: 'avatar',
            placeholder: '',
            type: 'file'
        })

        const template = compile(this.getTemplate(PopupTemplate));
        return this.compile(template, this.props);
    }
}

export default PopupUploadImage;