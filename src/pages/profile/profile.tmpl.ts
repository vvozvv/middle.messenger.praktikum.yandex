import ImageNotFound from '../../assets/image/icon/image-not-found.svg';

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
						<p class="profile__field-value">{{{email}}}</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Логин</p>
						<p class="profile__field-value">{{{login}}}</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Имя</p>
						<p class="profile__field-value">{{{first_name}}}</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Фамилия</p>
						<p class="profile__field-value">{{{second_name}}}</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Имя в чате</p>
						<p class="profile__field-value">{{{display_name}}}</p>
					</div>
					<div class="profile__row">
						<p class="profile__field-name">Телефон</p>
						<p class="profile__field-value">{{{phone}}}</p>
					</div>
				</div>
				
				<div class="profile__bottom">
				    {{{linkResetPassword}}}
					{{{linkChangePassword}}}
					{{{logout}}}
				</div>
			</div>
    </main>
`;

export { ProfilePageTemplate };
