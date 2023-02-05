const RegistrationPageTemplate = `
    <main class="registration">
      <div class="registration__content">
        <h1 class="registration__title">
          Регистрация
        </h1>
        <form action="" id='registration-form' class="registration-form">
            <div class="input-box">
               <label for="email" class="input-box__title">Почта</label>
               <input
                  type="text"
                  class="input registration-form__input"
                  placeholder="Введите почту"
                  name="email"
                  required=""
               >
            </div>
            <div class="input-box">
               <label for="login" class="input-box__title">Логин</label>
               <input
                 type="text"
                 class="input registration-form__input"
                 placeholder="Введите логин"
                 name="login"
                 required=""
               >
            </div>
            <div class="input-box">
               <label for="first_name" class="input-box__title">Имя</label>
               <input
                 type="text"
                 class="input registration-form__input"
                 placeholder="Введите Имя"
                 name="first_name"
                 required=""
               >
            </div>
            <div class="input-box">
               <label for="second_name" class="input-box__title">Фамилия</label>
               <input
                 type="text"
                 class="input registration-form__input"
                 placeholder="Введите Фамилию"
                 name="second_name"
                 required=""
               >
            </div>
            <div class="input-box">
               <label for="phone" class="input-box__title">Телефон</label>
               <input
                 type="text"
                 class="input registration-form__input"
                 placeholder="Введите Телефон"
                 name="phone"
                 required=""
               >
            </div>
            <div class="input-box">
               <label for="password" class="input-box__title">Пароль</label>
               <input
                 type="password"
                 class="input input--error registration-form__input"
                 placeholder="Введите Пароль"
                 name="password"
                 required=""
               >
               <p class="input-box__error">Пароли не совпадают</p>
            </div>
            <div class="input-box">
               <label for="repeatPassword" class="input-box__title">Пароль (ещё раз)</label>
               <input
                 type="password"
                 class="input input--error registration-form__input"
                 placeholder="Пароль (ещё раз)"
                 name="repeatPassword"
                 required=""
               >
               <p class="input-box__error">Пароли не совпадают</p>
            </div>
            <button type="submit" class="button">Log in</button>
        </form>
        <a href="authorization" class="link link--center registration__link">Sign up</a>
      </div>
    </main>
`;

export { RegistrationPageTemplate };
