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
					<div class="chat-item">
						<div class="chat-item__image"></div>
						<div class="chat-item__content">
							<p class="chat-item__name">Киноклуб</p>
							<p class="chat-item__message">Друзья, у меня для вас особенный выпуск новостей!...</p>
						</div>
						<div class="chat-item__settings">
							<div class="chat-item__header">
								<p class="chat-item__date">12:00</p>
								<div class="chat-item__setting-icon">
									<img src="${SettingsIcon}" alt="Настройки" class="chat-item__setting-icon-image">
								</div>
							</div>
							<div class="chat-item__active">
								<div class="chat-item__count-message">4</div>
							</div>
						</div>
					</div>
					<div class="chat-item chat-item--active">
						<div class="chat-item__image"></div>
						<div class="chat-item__content">
							<p class="chat-item__name">Киноклуб</p>
							<p class="chat-item__message">Друзья, у меня для вас особенный выпуск новостей!...</p>
						</div>
						<div class="chat-item__settings">
							<div class="chat-item__header">
								<p class="chat-item__date">12:00</p>
								<div class="chat-item__setting-icon">
									<img src="${SettingsIcon}" alt="Настройки" class="chat-item__setting-icon-image">
								</div>
							</div>
							<div class="chat-item__active">
								<div class="chat-item__count-message">4</div>
							</div>
						</div>
					</div>
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
						<div class="chat-content__message">
							<p class="chat-content__message-item">Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
							<p class="chat-content__message-item">Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
							<p class="chat-content__message-date">12:33</p>
						</div>
						<div class="chat-content__message chat-content__message--current">
							<p class="chat-content__message-item">Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
							<p class="chat-content__message-item">Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
							<p class="chat-content__message-date">12:33</p>
						</div>
					</div>
					<div class="chat-content__bottom">
						<form class="chat-content__control">
							<div class="chat-content__files">
								<img src="${FileIcon}" alt="Добавить файл" class="chat-content__icon chat-content__file-icon">
							</div>
							<div class="chat-content__input-box">
								<input type="text" name="chat-content-send" placeholder="Введите сообщение" class="chat-content__input">
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

export { ChatPageTemplate };
