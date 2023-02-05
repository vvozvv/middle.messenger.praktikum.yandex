import * as SettingsIcon from '../../assets/image/icon/dot-menu-more.svg';
import * as FileIcon from '../../assets/image/icon/file.svg';
import * as SendIcon from '../../assets/image/icon/send.svg';

const ChatPageTemplate = `
    <main class="chat">
    	<div class="chat__info">
    		<div class="chat__info-header">
    			<p class="chat__profile">В профиль</p>
				</div>
				<div class="chat__search">
					<input type="text" class="input chat__search-input" placeholder="Поиск">
				</div>
				<div class="chat__chat-list">
					{{#each chats}}
					  {{{ChatItems time="{{this.time}}" text="text" count="4" name="name" }}}
					{{/each}}
				</div>
			</div>
    	
    	<div class="chat__main">
    		<div class="chat-header chat__header">
    			<div class="chat-header__user">
						<div class="chat-header__image"></div>
						<p class="chat-header__username">Вадим</p>
    			</div>
    			<div class="chat-header__settings">
    				<img src="${SettingsIcon}" alt="Настройки" class="chat-item__setting-icon-image">
					</div>
				</div>
				<div class="chat-content">
					<div class="chat-content__scroll">
						<p class="chat-content__date">19 июня</p>
						{{#each messages}}
						  {{{Message text="dfdf"}}}
						{{/each}}
					</div>
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
				</div>
			</div>
    </main>
`;

export default ChatPageTemplate;
