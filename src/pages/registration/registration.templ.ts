const RegistrationPageTemplate = `
    <main class="registration">
      <div class="registration__content">
        <h1 class="registration__title">
          Регистрация
        </h1>
        <form action="" id='registration-form' class="registration-form">
            {{{inputEmail}}}
            {{{inputLogin}}}
            {{{inputName}}}
            {{{inputSurname}}}
            {{{inputPhone}}}
            {{{inputPassword}}}
            {{{inputPasswordSecond}}}
            
            {{{buttonSubmit}}}
        </form>
        <a href="authorization" class="link link--center registration__link">Войти</a>
      </div>
    </main>
`;

export { RegistrationPageTemplate };
