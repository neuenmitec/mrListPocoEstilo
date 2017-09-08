import { MrListPage } from './app.po';

describe('mr-list App', () => {
  let page: MrListPage;

  beforeEach(() => {
    page = new MrListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
