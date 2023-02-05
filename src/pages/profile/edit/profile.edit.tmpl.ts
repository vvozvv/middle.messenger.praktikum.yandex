import ImageNotFound from '../../../assets/image/icon/image-not-found.svg';

const ProfileEditPageTemplate = `
    <main class="profile">
    	<div class="profile__container">
				<div class="profile__image-block">
					<div class="profile__image">
						<img src="${ImageNotFound}" alt="Картинка не найдена">
					</div>
					<div class="profile__name">Иван</div>
				</div>
				<form id='profile-edit-form' class="profile__table">
				    {{{inputEmail}}}
                    {{{inputLogin}}}
                    {{{inputName}}}
                    {{{inputSurname}}}
                    {{{inputPhone}}}
                    {{{buttonSubmit}}}
				</form>
			</div>
    </main>
`;

export { ProfileEditPageTemplate };
