import Block from "./Block";

describe('Block (Component)', () => {

  const template = () => `<div><h1>Template</h1><div>`;
  class Component extends Block {
    constructor() {
      super();

      this.props = {
        base: 'prop',
      };
    }

    render() {
      return this.compile(template, {});
    }
  }

  const component = new Component();

  it('Проверка на наличии id у компонента', () => {
    const result = component.id;

    expect(result).not.toBeNull();
  });
  //
  // it('Контект компонента не равен null', () => {
  //   const result = component.getContent();
  //
  //   expect(result).to.be.not.null;
  // });
  //
  // it('setProps method added props', () => {
  //   component.setProps({ test: 'test' });
  //
  //   console.log(component.props)
  //
  //   expect(component.props).to.have.property('test');
  // });

})
