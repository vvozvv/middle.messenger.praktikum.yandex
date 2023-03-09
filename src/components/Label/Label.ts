import Block from '../../core/block/Block';
import { compile } from 'handlebars';
import { LabelTmpl } from './Label.tmpl';

type LabelProps = {
    name: string;
}

export default class Label extends Block {
    static helper = 'Label';

    constructor(props: LabelProps) {
        super(props);
    }

    protected render(): any {
        const template = compile(LabelTmpl)
        return this.compile(template, this.props);
    }
}
