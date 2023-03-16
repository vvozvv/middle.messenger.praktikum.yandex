import router from "./Router";

describe('Роутер', () => {

  it('Переход на новую страницу должен менять состояние сущности history', () => {
    router.go('/login');
    router.go('/sing-in');

    expect(router.getHistoryLength()).toEqual(3);
  });

  it('Проверка наличие роутера', () => {
    const { history, routes } = router;

    expect(routes).toStrictEqual([]);
    expect(Object.keys(history).length).toBe(0);
  });

  it('Проверка адреса роута', () => {
    router.go('/messages');
    const pathname = router.getLocationPathname() || {};
    expect(pathname).toEqual('/messages');
  });
});
