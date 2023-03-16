import Block from "./Block";

describe('Block (Component)', () => {
  const template = () => `<div><h1>Template</h1></div>`;

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


  it('Контект компонента не равен null', () => {
    const result = component.getContent();

    expect(result).not.toBeNull();
  });

  it('Установка пропсов', () => {
    component.setProps({ test: 'test' });
    const props = component.props.test;

    expect(props).toBe('test');
  });

  it('Render возвращает нужное содержимое', () => {
    expect(component.element.innerHTML).toBe('<h1>Template</h1>');
  });
})
