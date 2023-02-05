
const AuthorizationPageTemplate = `
    <main class="authorization">
      <div class="authorization__content">
        <h1 class="authorization__title">
          Вход
        </h1>
        <form action="" id='authorization-form' class="authorization-form">
            {{{inputLogin}}}
            {{{inputPassword}}}
            {{{button}}}
        </form>
        <a href="registration" class="link link--center authorization__link">Sign up</a>
      </div>
    </main>
`;

export { AuthorizationPageTemplate };
