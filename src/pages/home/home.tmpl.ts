import { PAGE } from '../../modules/router';

const HomedPageTemplate = `
    <main class="home">
      <div class="home__content">
        <h1 class="home__title title">
          Главная страница
        </h1>
         <nav class="home__container">
            <ul class="home__menu">
							<li class="home__menu-item">
								<a href="${PAGE.LOGIN}" class="home__box">Авторизация</a>
							</li>
							<li class="home__menu-item">
								<a href="${PAGE.REGISTRATION}" class="home__box">Регистрация</a>
							</li>
							<li class="home__menu-item">
								<a href="${PAGE.CHATS}" class="home__box">Чаты</a>
							</li>
							<li class="home__menu-item">
								<a href="${PAGE.PROFILE}" class="home__box">Профиль</a>
							</li>
							<li class="home__menu-item">
								<a href="${PAGE.NOT_FOUND}" class="home__box">404</a>
							</li>
							<li class="home__menu-item">
								<a href="${PAGE.ERROR}" class="home__box">500</a>
							</li>
						</ul>
          </nav>
      </div>
    </main>
`;

export { HomedPageTemplate };
