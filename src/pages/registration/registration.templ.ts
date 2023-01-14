const RegistrationPageTemplate = `
    <main class="registration">
      <div class="registration__content">
        <h1 class="registration__title">
          Регистрация
        </h1>
        <form action="" class="registration-form">
            <div class="input-box">
               <p class="input-box__title">Почта</p>
               <input
                  type="text"
                  class="registration-form__input"
                  placeholder="Введите почту"
                  name="email"
                  required=""
               >
            </div>
            <div class="input-box">
               <p class="input-box__title">Логин</p>
               <input
                 type="text"
                 class="registration-form__input"
                 placeholder="Введите логин"
                 name="login"
                 required=""
               >
            </div>
            <div class="input-box">
               <p class="input-box__title">Имя</p>
               <input
                 type="text"
                 class="registration-form__input"
                 placeholder="Введите Имя"
                 name="first_name"
                 required=""
               >
            </div>
            <div class="input-box">
               <p class="input-box__title">Фамилия</p>
               <input
                 type="text"
                 class="registration-form__input"
                 placeholder="Введите Фамилию"
                 name="second_name"
                 required=""
               >
            </div>
            <div class="input-box">
               <p class="input-box__title">Телефон</p>
               <input
                 type="text"
                 class="registration-form__input"
                 placeholder="Введите Телефон"
                 name="phone"
                 required=""
               >
            </div>
            <div class="input-box">
               <p class="input-box__title">Пароль</p>
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
               <p class="input-box__title">Пароль (ещё раз)</p>
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
        <a href="#signup" class="link link--center registration__link">Sign up</a>
      </div>
    </main>
`;

export { RegistrationPageTemplate };
