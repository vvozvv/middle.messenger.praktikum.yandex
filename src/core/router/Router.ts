import {Route} from "./Route";
import Block from "../Block";

class Router {
  private static __instance: any;
  private routes: any[];
  private _currentRoute: Route | null;
  private _rootQuery: string;
  private history: History;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname: string) {
    if (pathname) {
      this.history.pushState({}, '', pathname);
      this._onRoute(pathname);
    }
  }

  back() {
    this.history.back();
    const pathname = this.getLocationPathname();
    this._onRoute(pathname);
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }

  public getLocationPathname() {
    return window.location.pathname;
  }
}

export default new Router("#root");
