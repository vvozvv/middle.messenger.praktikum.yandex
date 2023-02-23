import Block from "../../../core/Block";
import {compile} from "handlebars";
import InputUploaderImpl from "../InputUploader/InputUploader.tmpl";
import './InputUploader.styles.scss';

type TInputUploader = {}

export class InputUploader extends Block {
    constructor(props: TInputUploader) {
        super({
            ...props,
            events: {
                change: (e: Event) => {
                    this.setProps({
                        ...this.props,
                        fileName: (e.target as any)?.files[0]?.name
                    });

                    const el = document.getElementById(this.id) as HTMLInputElement;
                    el.files = (e.target as any)?.files
                },
            }
        });
    }

     render() {
        const template = compile(InputUploaderImpl)
        return this.compile(template, {
            ...this.props,
            id: this.id
        });
    }
}