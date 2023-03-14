import Block from "../block/Block";
import isEqual from "../../utils/helpers/isEqual";

interface IProps {
  rootQuery: string,
}

export class Route {
    private _pathname: any;
    private readonly _blockClass: any;
    private _block: Block<{}> | null;
    private _props: IProps;

    constructor(pathname: string, view: Block, props: IProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname as any, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
        }

        renderDOM(this._props.rootQuery, this._block!);
        this._block?.getContent();
    }
}

function renderDOM(rootSelector: string, component: Block) {
    const root = document.querySelector(rootSelector);

    if (!root) throw new Error('Root not found');

    root.innerHTML = '';

    root.append(component.getContent() as HTMLElement);
}
