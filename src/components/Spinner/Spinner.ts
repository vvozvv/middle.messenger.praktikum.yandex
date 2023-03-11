import Block from "../../core/block/Block";
import {compile} from "handlebars";
import SpinnerTmpl from "components/Spinner/Spinner.tmpl";
import './Spinner.styles.scss';

class Spinner extends Block {
  protected render() {
    const temp = compile(SpinnerTmpl)
    return this.compile(temp, this.props);
  }
}

export default Spinner;
