import {PopupUploadImage} from "components/Popup";
import UserController from "api/user/user-controller";
import store from "store/Store";

class PopupUploadUserAvatar extends PopupUploadImage {
  constructor(props: any) {
    super(props);
    // @ts-ignore
    this.events?.['submit'] = async (e: any) => {
      e.preventDefault();

      const form = new FormData(e.target);

      try {
        const data = await UserController.updateAvatar(form);
        const { response } = data;
        store.set('currentUser', JSON.parse(response))
        this.toggleClass();
      } catch (e) {
        alert('Ошибка загрузки')
      }
    }
  }
}

export default PopupUploadUserAvatar;
