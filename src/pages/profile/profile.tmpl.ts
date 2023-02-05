import ImageNotFound from '../../assets/image/icon/image-not-found.svg';
import { PAGE } from '../../modules/router';

const ProfilePageTemplate = `
    <main class="profile">
    	<div class="profile__container">
				<div class="profile__image-block">
					<div class="profile__image">
						<img src="${ImageNotFound}" alt="Картинка не найдена">
					</div>
					<div class="profile__name">Иван</div>
				</div>
				<div class="profile__table">
					<div class="profile__row">
						<p class="profile__field-name">Почта</p>
						<p class="profile__field-value">pochta@yandex.ru</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Логин</p>
						<p class="profile__field-value">ivanivanov</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Имя</p>
						<p class="profile__field-value">Иван</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Фамилия</p>
						<p class="profile__field-value">Иванов</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Имя в чате</p>
						<p class="profile__field-value">Иван</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Телефон</p>
						<p class="profile__field-value">+7 (909) 967 30 30</p>
					</div>
				</div>
				
				<div class="profile__bottom">
					<a href="${PAGE.PROFILE_EDIT}" class="profile__link">Изменить данные</a>
					<a href="" class="profile__link">Изменить пароль</a>
					<a href="" class="profile__link profile__link--danger">Выйти</a>
				</div>
			</div>
    </main>
`;

export { ProfilePageTemplate };
