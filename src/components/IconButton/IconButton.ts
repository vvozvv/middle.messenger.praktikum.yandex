import Block from "../../core/Block";
import {compile} from "handlebars";
import IconButtonTmpl from "./IconButton.tmpl";
import './IconButton.styled.scss';

type TIconButton = {
    icon: string;
    title: string;
    events?: any;
}

export default class IconButton extends Block {
    constructor(props: TIconButton) {
        super(props);
    }
    protected render() {
        const tmpl = compile(IconButtonTmpl);
        return this.compile(tmpl, this.props)
    }
}
