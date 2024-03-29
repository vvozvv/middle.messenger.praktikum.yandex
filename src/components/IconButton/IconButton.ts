import {compile} from "handlebars";
import Block from "core/block/Block";
import {Icon} from "components/Icon";
import './IconButton.styled.scss';
import IconButtonTmpl from "./IconButton.tmpl";

type TIconButton = {
    iconId: string | number;
    title: string;
    events?: Record<string, any>;
}

class IconButton extends Block {
    constructor(props: TIconButton) {
        super(props);
    }
    protected render() {
        this.children.icon = new Icon({
          content: this.props?.iconId,
          width: 25,
          height: 25,
        });

        const tmpl = compile(IconButtonTmpl);
        return this.compile(tmpl, this.props)
    }
}

export default IconButton;
