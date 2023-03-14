import Block from "../../core/block/Block";
import {compile} from "handlebars";
import ProfileImageTemplate from "./ProfileImage.tmpl";
import store, {StoreEvents} from "../../store/Store";
import {getImagePath} from "../../utils/helpers/links";
import {ProfileResponse} from "../../core/types/common";
import './ProfileImage.styles.scss';

export class ProfileImage extends Block {
    constructor(props: any) {
        super({
            ...props,
            avatarLink: getImagePath((store.getState()?.currentUser as ProfileResponse)?.avatar),
            name: (store.getState()?.currentUser as ProfileResponse)?.display_name,
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    protected render() {
        const template = compile(ProfileImageTemplate);
        return this.compile(template, this.props);
    }
}
