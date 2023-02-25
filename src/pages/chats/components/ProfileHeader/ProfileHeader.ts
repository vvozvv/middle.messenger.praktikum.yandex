import Block from "../../../../core/Block";
import {compile} from "handlebars";
import ProfileHeaderTmpl from "./ProfileHeader.tmpl";
import store, {StoreEvents} from "../../../../store/Store";
import {ProfileResponse} from "../../../../core/types/common";
import {getImagePath} from "../../../../utils/helpers/links";
import './ProfileHeader.styles.scss';
import router from "../../../../core/router/Router";
import {PAGE} from "../../../../modules/router";


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