import {compile} from "handlebars";
import Block from "core/block/Block";
import iconTemplate from './Icon.tmpl'

interface IIcon {
  id: string;
  width: number;
  height: number;
}

class Icon extends Block {
  constructor(props: IIcon) {
    super(props);
  }

  render() {
    console.log(this.props)
    const template = compile(iconTemplate);
    return this.compile(template, this.props);
  }
}

export default Icon;
