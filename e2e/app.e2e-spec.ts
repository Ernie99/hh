import { HhPage } from './app.po';

describe('hh App', function() {
  let page: HhPage;

  beforeEach(() => {
    page = new HhPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
