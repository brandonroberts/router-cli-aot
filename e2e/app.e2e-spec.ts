import { RouterCliPage } from './app.po';

describe('router-cli App', function() {
  let page: RouterCliPage;

  beforeEach(() => {
    page = new RouterCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
