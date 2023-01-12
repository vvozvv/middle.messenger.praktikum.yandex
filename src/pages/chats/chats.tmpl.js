const ChatPageTemplate = `
    <main class="chat">
    	<div class="chat__info">
    		<div class="chat__info-header">
    			<p class="chat__profile">В профиль</p>
				</div>
				<div class="chat__search">
					<input type="text" class="chat__search-input" placeholder="Поиск">
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
									<img src="../../assets/image/icon/dot-menu-more.svg" alt="">
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
								<div class="chat-item__setting-icon"></div>
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
    			
					</div>
				</div>
				<div class="chat-content">
					<div class="chat-content__scroll">
						<p class="chat-content__date"></p>
					</div>
					<div class="chat-content__bottom">
						<div class="chat-content__control">
							<div class="chat-content__files"></div>
							<div class="chat-content__input-box">
								<input type="text" name="chat-content-send" placeholder="Введите сообщение" class="chat-content__input">
							</div>
							<div class="chat-content__send"></div>
						</div>
					</div>
				</div>
			</div>
    </main>
`;

export { ChatPageTemplate };
