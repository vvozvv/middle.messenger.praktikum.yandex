import {compile} from "handlebars";
import {PAGE} from "modules/router";
import Block from "core/block/Block";
import router from "core/router/Router";
import store, {StoreEvents} from "store/Store";
import {ProfileResponse} from "core/types/common";
import {getImagePath} from "utils/helpers/links";
import ProfileHeaderTmpl from "./ProfileHeader.tmpl";
import './ProfileHeader.styles.scss';

export default class ProfileHeader extends Block {
  constructor() {
    super({
      events: {
        click: () => {
          router.go(PAGE.PROFILE)
        }
      }
    });

    store.on(StoreEvents.Updated, () => {
      const profile = store.getState()?.currentUser as ProfileResponse;
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps({
        name: `${profile?.first_name} ${profile?.second_name}`,
        avatar: getImagePath(profile?.avatar),
      });
    });
  }

  protected render(): any {
    const template = compile(ProfileHeaderTmpl);
    return this.compile(template, this.props)
  }
}
