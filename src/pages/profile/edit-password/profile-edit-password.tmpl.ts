const ProfileEditPageTemplate = `
    <main class="profile">
    	<div class="profile__container">
				<form id='profile-edit-password-form' class="profile__table">
				    {{{inputOldPassword}}}
            {{{inputPassword}}}
            {{{inputPasswordSecond}}}
            {{{buttonSubmit}}}
            {{{buttonBack}}}
				</form>
			</div>
    </main>
`;

export { ProfileEditPageTemplate };
