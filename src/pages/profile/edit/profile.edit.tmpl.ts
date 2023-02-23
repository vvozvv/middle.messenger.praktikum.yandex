const ProfileEditPageTemplate = `
    <main class="profile">
    	<div class="profile__container">
    	        {{{popup}}}
				{{{imageLoader}}}
				<form id='profile-edit-form' class="profile__table">
				    {{{inputEmail}}}
                    {{{inputLogin}}}
                    {{{inputName}}}
                    {{{inputSurname}}}
                    {{{displayName}}}
                    {{{inputPhone}}}
                    {{{buttonSubmit}}}
				</form>
			</div>
    </main>
`;

export { ProfileEditPageTemplate };
