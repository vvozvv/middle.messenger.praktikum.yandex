import {v4 as makeUUID} from 'uuid';
import {EventBus} from './EventBus';

abstract class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
    FLOW_ADD_EVENTS: 'flow:add-events',
  };

  public id = makeUUID();
  public children: any = {};
  public refs: Record<string, Block> = {};
  public props: Record<string, any>;
  public events: { [key: string]: (a: Event) => void; } | undefined;
  protected _element: HTMLElement | null = null;
  private _eventBus: () => EventBus;

  constructor(props: object = {}) {
    const eventBus = new EventBus();
    this.children = this._getChildren(props);
    this.props = this._makePropsProxy(props);
    this._eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_ADD_EVENTS, this.addEvents.bind(this));
  }

  public getContent() {
    return this.element;
  }

  protected componentDidMount() {
    return true;
  }

  _getChildren(propsAndChildren: Record<string, any>) {
    const children: Record<string, any> = {};
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    // console.log(children, props);
    return {children, props};
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      (child as any).dispatchComponentDidMount();
    });
  }


  protected dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  protected componentDidUpdate(oldProps: any, newProps: any) {
    return JSON.stringify(oldProps) === JSON.stringify(newProps);
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    if (!this.componentDidUpdate(oldProps, newProps)) {
      this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  //   TODO: заменить
  protected render(): any {
    return new DocumentFragment();
  }

  private init() {
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this._eventBus().emit(Block.EVENTS.FLOW_ADD_EVENTS);
  }

  private _render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this.removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this.addEvents();
  }

  public hide() {
    const el = this.getContent();

    // if (el) el.style.display = 'none';
  }

  public compile(template: (context: any) => string, context: Record<string, any>) {
    const propsAndStubs = {...context};

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${(child as any).id}"></div>`
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = template(propsAndStubs);

    Object.entries(this.children).forEach(([_, component]) => {
      const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      const content = component.getContent()!;

      stub.replaceWith(content);
    });

    return fragment.content;
  }

  private get element(): HTMLElement | null {
    return this._element;
  }

  private _makePropsProxy(props: Record<string, any>) {
    const self = this;

    return new Proxy(props, {
      get(target: Record<string, any>, p: string) {
        const value = target[p];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, any>, p: string, value) {
        const oldProps = {...target};
        target[p] = value;

        self._eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });
  }

  private addEvents() {
    const {events = {}} = this.props;
    this.events = events;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName], true);
    });
  }

  private removeEvents() {
    if (this.events) {
      Object.keys(this.events).forEach((eventName) => {
        if (this.events) {
          this._element?.removeEventListener(eventName, this.events[eventName]);
        }
      });

      this.events = {};
    }
  }
}

export default Block;
