import {PopupUploadImage} from "components/Popup";
import store from "store/Store";
import ChatsController from "api/chats/chats-controller";
import {getImagePath} from "../../../utils/helpers/links";

class PopupUploadChatImage extends PopupUploadImage {
  constructor(props: any) {
    super(props);
    // @ts-ignore
    this.events?.['submit'] = async (e: any) => {
      e.preventDefault();

      const storeContent = store.getState() as any;
      const form = new FormData(e.target);
      form.append('chatId', storeContent?.active?.activeChat.id);

      try {
        const data = await ChatsController.setChatAvatar(form);
        const { response } = data as any;

        const newAvatar = getImagePath(JSON.parse(response)?.avatar);

        const mapChat = storeContent?.chat.map((item: any) => {
          if (item?.id === Number(storeContent?.active?.activeChat?.id)) {
            return {
              ...item,
              avatar: newAvatar
            }
          }

          return item;
        });

        store.set('active.activeChat', { ...storeContent?.activeChat, avatar: newAvatar })
        store.set('chat', mapChat)

        this.toggleClass();
      } catch (e) {
        alert('Ошибка загрузки')
      }
    }
  }
}

export default PopupUploadChatImage;
