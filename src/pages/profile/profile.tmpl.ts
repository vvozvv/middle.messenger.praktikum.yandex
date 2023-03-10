const ProfilePageTemplate = `
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
      </div>
    </main>
`;

export {ProfilePageTemplate};
