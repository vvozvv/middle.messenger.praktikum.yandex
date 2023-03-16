import Block from '../../core/block/Block';
import { compile } from 'handlebars';
import { LabelTmpl } from './Label.tmpl';

type LabelProps = {
    name: string;
}

class Label extends Block {
    static helper = 'Label';

    constructor(props: LabelProps) {
        super(props);
    }

    protected render() {
        const template = compile(LabelTmpl)
        return this.compile(template, this.props);
    }
}

export default Label;
