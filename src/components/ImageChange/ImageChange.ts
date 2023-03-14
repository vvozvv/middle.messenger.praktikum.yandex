import {compile} from "handlebars";
import Block from "core/block/Block";
import ImageChangeTmpl from "./ImageChange.tmpl";
import './ImageChange.styles.scss';
import {TBlock} from "core/types/common";

interface ImageChangeProps extends TBlock {
  avatar: string;
}

class ImageChange extends Block {
  constructor(props: ImageChangeProps) {
    super(props);
  }
  protected render() {
    const template = compile(ImageChangeTmpl)
    return this.compile(template, this.props);
  }
}

export default ImageChange;
