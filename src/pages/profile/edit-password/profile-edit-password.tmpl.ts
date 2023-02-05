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
				<form id='profile-edit-password-form' class="profile__table">
				    {{{inputOldPassword}}}
                    {{{inputPassword}}}
                    {{{inputPasswordSecond}}}
                    {{{buttonSubmit}}}
				</form>
			</div>
    </main>
`;

export { ProfileEditPageTemplate };
