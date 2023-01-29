class App {
  private static defaultPageId = 'currentPage';

  static renderNewPage(idPage: string) {
    const currentPage = document.querySelector(`#${App.defaultPageId}`);
    if (currentPage) {
      currentPage.remove();
    }

    switch (idPage) {
      default:
        return document.body.append('not found');
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  run() {
    console.log('start app...');
    this.enableRouteChange();
  }
}

export default App;
