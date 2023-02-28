enum PAGE {
    MAIN = '/',
    LOGIN = '/authorization',
    REGISTRATION = '/sign-up',
    CHATS = '/messenger',
    PROFILE = '/profile',
    PROFILE_EDIT = '/settings',
    PROFILE_PASSWORD_EDIT = '/profile-edit-password',
    NOT_FOUND = '/404',
    ERROR = '/500',
}

export const AllowedWithoutToken = [
    PAGE.LOGIN,
    PAGE.REGISTRATION,
    PAGE.NOT_FOUND,
    PAGE.ERROR,
]


const pagesList: Array<{ path: PAGE, name: string }> = [
    { path: PAGE.MAIN, name: 'Главная страница' },
    { path: PAGE.LOGIN, name: 'Авторизация' },
    { path: PAGE.REGISTRATION, name: 'Регистрация' },
    { path: PAGE.CHATS, name: 'Чаты' },
    { path: PAGE.PROFILE, name: 'Профиль' },
];

export { PAGE, pagesList }
