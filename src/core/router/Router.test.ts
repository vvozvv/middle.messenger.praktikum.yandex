import router from "./Router";

describe('Роутер', () => {

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    router.go('/login');
    router.go('/sing-in');

    expect(router.getHistoryLength()).toEqual(3);
  });

  // it('Проверка наличие роутера', () => {
  //   expect(router).toContain('routes');
  //   expect(router).toContain('history');
  // });

  it('Проверка дареса роута', () => {
    router.go('/messages');
    const pathname = router.getLocationPathname() || {};
    expect(pathname).toEqual('/messages');
  });
});
