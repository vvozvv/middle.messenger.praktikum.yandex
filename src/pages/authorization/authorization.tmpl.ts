import { PAGE } from 'modules/router';

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
        
        <a href="${PAGE.REGISTRATION}" class="link link--center authorization__link">
          {{{spinner}}}
          Sign up
        </a>
      </div>
    </main>
`;

export { AuthorizationPageTemplate };
