import {compile} from "handlebars";
import Block from 'core/block/Block';
import {FormData, TAuthUser} from 'core/types/common';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import {formArrayToObjectRequest} from 'utils/helpers/functions';
import AuthController from "api/auth/auth-controller";
import store from 'store/Store';
import router from "core/router/Router";
import {PAGE} from "modules/router";
import {AuthorizationPageTemplate} from "./authorization.tmpl";
import './authorization.style.scss';
import {withLoadingAuth} from "hoc/withLoadings";

/**
 * Главная "Авторизация"
 */
class Authorization extends Block {
  constructor() {
    super({
      events: {
        submit: async (e: MouseEvent) => {
          e.preventDefault();
          const form = document.getElementById('authorization-form');
          const inputs = form?.querySelectorAll('input');

          const formData: FormData[] = [];
          inputs?.forEach((input) => {
            return formData.push({
              name: input.name,
              value: input.value,
              type: input.type,
            });
          });

          const objForm = formArrayToObjectRequest(formData);

          await AuthController.signIn(objForm as TAuthUser);

          try {
            const user = await AuthController.getUser();
            const {status, response} = user as any;

            if (status === 200 || status === 400) {
              store.set('currentUser', JSON.parse(response));
              store.set('isLoadingAuth', false);
              router.go(PAGE.CHATS)
            } else {
              throw new Error('Ошибка получения пользователя')
            }
          } catch (e) {
            console.error(e)
          }
        },
      },
    });

    store.on('', () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });
  }

  render() {
    this.children.inputLogin = new Input({
      name: 'login',
      label: 'Логин',
      placeholder: 'Введите логин',
      type: 'text',
      validation: {
        required: true,
      }
    });
    this.children.inputPassword = new Input({
      name: 'password',
      label: 'Пароль',
      placeholder: 'Введите пароль',
      type: 'password',
      validation: {
        required: true,
        min: 6,
        isPassword: true
      }
    });
    this.children.button = new Button({
      type: 'submit',
      page: 'login',
      title: 'Log in',
      isLoading: this.props.isLoading
    })

    const template = compile(AuthorizationPageTemplate);
    return this.compile(template, this.props);
  }
}

export default withLoadingAuth(Authorization);
