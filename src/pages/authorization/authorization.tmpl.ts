const AuthorizationPageTemplate = `
    <main class="authorization">
      <div class="authorization__content">
        <h1 class="authorization__title">
          Вход
        </h1>
        <form action="" class="authorization-form">
            <div class="input-box">
               <p class="input-box__title">Username</p>
               <input
                  type="text"
                  class="authorization-form__input"
                  placeholder="Enter username"
                  name="login"
                  required=""
               >
            </div>
            <div class="input-box">
               <p class="input-box__title">Password</p>
               <input
                 type="password"
                 class="authorization-form__input"
                 placeholder="Enter password"
                 name="password"
                 required=""
               >
            </div>
            <button type="submit" class="button">Log in</button>
        </form>
        <a href="#signup" class="link link--center authorization__link">Sign up</a>
      </div>
    </main>
`;

export { AuthorizationPageTemplate };
