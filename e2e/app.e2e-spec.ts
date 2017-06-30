import { PvCmpPage } from './app.po';

describe('pv-cmp App', () => {
  let page: PvCmpPage;

  beforeEach(() => {
    page = new PvCmpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
