import {compile} from "handlebars";
import Popup from "../Popup";
import PopupTemplate from "../PupupUploadImage/PupupUploadImage.tmpl";
import {InputUploader} from "../../Input";
import './PopupUploadImage.styles.scss'

/**
 * Модальное окно "Загрузить аватар"
 */
class PopupUploadImage extends Popup {
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
