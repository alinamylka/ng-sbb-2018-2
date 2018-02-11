import { AwesomeNgPage } from './app.po';

describe('awesome-ng App', () => {
  let page: AwesomeNgPage;

  beforeEach(() => {
    page = new AwesomeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
