const ProfileEditPageTemplate = `
    <main class="profile">
        {{{popup}}}
        <div class="profile__back-panel">
            <div class="profile__back">
                {{{goMessagerButton}}}
            </div>
        </div>
        <div class="profile__container-box">
            <div class="profile__container">
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
      </div>
    </main>
`;

export { ProfileEditPageTemplate };
