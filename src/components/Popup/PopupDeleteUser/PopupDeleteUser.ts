import {compile} from "handlebars";
import Button from "components/Button/Button";
import Popup from "../Popup";
import store from "store/Store";
import {withActiveChatConnect} from "hoc/withActiveChat";
import ChatsController from "api/chats/chats-controller";
import PopupDeleteUserTmpl from "./PopupDeleteUser.tmpl";
import './PopupDeleteUser.styles.scss';

/**
 * Модальное окно "Удалить пользователя из чата"
 */
class PopupDeleteUser extends Popup {
  constructor(props: any) {
    super(props);
    this.loadUsers()
  }

  loadUsers() {
    const id = store.getState().active?.id;

    if (id) {
      ChatsController.getUserChats(id).then(res => {
        const { status, response } = res;

        if (status === 200) {
          this.setProps({
            user: JSON.parse(response)
          })
        }

      })
    }


  }

  protected render(): DocumentFragment {
    this.children.deleteButton = new Button({
      type: 'button',
      page: 'Удалить',
      title: 'Удалить',
      events: {
        click: async (e: Event) => {
          e.preventDefault();
          const id = store.getState().active?.id;
          const form = document.getElementById('delete-user-popup-form');
          const inputs = form?.querySelectorAll('input');

          const formData: number[] = [];
          inputs?.forEach((input) => {
            if (input.checked) {
              formData.push(Number(input.value));
            }
          });

          const obj = {
            users: formData,
            chatId: Number(id)
          }

          try {
            await ChatsController.deleteChatUsers(obj);
            this.toggleClass();
          } catch (e) {
            alert('Ошибка удаления')
          }
        }
      }
    });

    const tmpl = compile(this.getTemplate(PopupDeleteUserTmpl));
    return this.compile(tmpl, this.props);
  }
}

export default withActiveChatConnect(PopupDeleteUser);
