import Block from "../../core/Block";
import {compile} from "handlebars";
import {LinkTmpl} from "./Link.tmpl";

type TLinkProps = {
    text: string;
    events?: any;
    classList?: string;
}

export class Link extends Block {
    constructor(props: TLinkProps) {
        super(props);
    }

    protected render() {
        return this.compile(compile(LinkTmpl), this.props);
    }
}