import Block from "../Block";
import isEqual from "../../utils/helpers/isEqual";

export class Route {
    private _pathname: any;
    private readonly _blockClass: any;
    private _block: Block | null;
    private _props: any;

    constructor(pathname: string, view: Block, props: any) {
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
            this._block = new this._blockClass();
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