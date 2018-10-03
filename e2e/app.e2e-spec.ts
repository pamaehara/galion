import { GalionPage } from './app.po';

describe('galion App', function() {
  let page: GalionPage;

  beforeEach(() => {
    page = new GalionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
