import { TogoshiWebPage } from './app.po';

describe('togoshi-web App', () => {
  let page: TogoshiWebPage;

  beforeEach(() => {
    page = new TogoshiWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
