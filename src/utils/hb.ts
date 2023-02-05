// @ts-ignore
import hb, { HelperOptions } from 'handlebars';
import Block from '../core/Block';

export interface ComponentProps<Props = any> {
    new(props: Props): Block;
    helper: string;
}

export default function registerComponent(Component: ComponentProps<any>) {
    hb.registerHelper(
        Component.helper,
        function helper(this: unknown, { data, fn, hash }: HelperOptions) {
            if (!data.root.children) {
                data.root.children = {};
            }

            if (!data.root.refs) {
                data.root.refs = {};
            }

            const { children } = data.root;

            const component = new Component(hash);

            if (hash.pattern) {
                data.root.refs[hash.pattern] = component;
            }


            children[component.id] = component;

            const contents = fn ? fn(this) : '';
            return `<div data-id="${component.id}">${contents}</div>`;
        },
    );
}
