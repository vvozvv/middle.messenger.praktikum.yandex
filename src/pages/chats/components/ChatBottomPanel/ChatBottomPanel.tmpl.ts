import * as FileIcon from '../../../../assets/image/icon/file.svg';
import * as SendIcon from '../../../../assets/image/icon/send.svg';

export default `
    <div class="chat-content__bottom">
        <form action='#' name="login" id='chat-message' class="form chat-content__control">
            <div class="chat-content__files">
                <img src="${FileIcon}" alt="Добавить файл" class="chat-content__icon chat-content__file-icon">
            </div>
            <div class="chat-content__input-box">
	            <input type="text" name="message" placeholder="Введите сообщение" class="chat-content__input">
            </div>
            <div class="chat-content__send">
                <button type='submit'>
                    <img src="${SendIcon}" alt="Отправить сообщение" class="chat-content__icon chat-content__send-icon">
                </button>
            </div>
        </form>
    </div>
`;